import { RFNode } from '@/common/entities';
import { FormStyled, SaveButtonStyled } from './NodeEditForm.styles';
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { NodeEditFormUpdateHandle } from './NodeEditForm.types';
import TextField from '@/common/ui/TextField';
import {
  children,
  displayNode,
  isParent,
  isSubNode,
  isTextAssetClass,
  nodeClassCode,
  nodeColor,
  nodeName,
  nodeWithName,
  parent,
  renamedNode,
} from '@/common/utils';
import ColorPicker, { ColorPickerProps } from '@/common/ui/ColorPicker';
import { node as createNode } from '@/common/utils';
import { useFlow } from '@/flow/context';
import Select, { SelectProps } from '@/common/ui/Select';
import MenuItem from '@/common/ui/MenuItem';
import { nodeClass } from '@/common/utils/nodeClass';
import {
  HeterogenousNodeClass,
  heterogenousNodeClasses,
  heterogenousNodeClassNameMap,
  NodeClassCode,
  nodeClassCodeNameMap,
  nodeClassCodeNames,
  NodeType,
  nodeType,
} from '@/flow/entities';
import { nodeImageMap } from '@/flow/data/nodeImageMap';

export type NodeEditFormProps = {
  node: RFNode;
  onSave?: NodeEditFormUpdateHandle;
  onNodeNameChange?: NodeEditFormUpdateHandle;
  onNodeColorChange?: NodeEditFormUpdateHandle;
  onNodeClassTypeChange?: NodeEditFormUpdateHandle;
  onNodeClassCodeChange?: NodeEditFormUpdateHandle;
};

const NodeEditForm: React.FC<NodeEditFormProps> = ({
  node,
  onSave,
  onNodeNameChange,
  onNodeColorChange,
  onNodeClassTypeChange,
  onNodeClassCodeChange,
}) => {
  const { nodes: existingNodes, setNodes } = useFlow();
  const [name, setName] = useState(() => nodeName(node) ?? '');
  const [color, setColor] = useState(() => nodeColor(node) ?? '');
  const [heterogenousClass, setHeterogenousClass] = useState(() =>
    nodeClass(node)
  );
  const [code, setCode] = useState(() => nodeClassCode(node));

  const isTextAsset = isTextAssetClass(heterogenousClass);
  const hasName = nodeWithName(node);
  const hasParent = isSubNode(node);
  const isTopLevelNode = !hasParent;
  const nodeParent = parent(node, existingNodes);
  const hasChildren = isParent(node, existingNodes);
  const [nodeChildren, setNodeChildren] = useState(() =>
    children(node, existingNodes)
  );
  const parentNodeInputLabel = hasName ? 'Parent name' : 'Parent id';

  useEffect(() => {
    setNodeChildren(children(node, existingNodes));
  }, [existingNodes, node]);

  const handleChildNameChange =
    (changedChanged: RFNode): ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      setNodeChildren((children) =>
        children.map((child) =>
          child.id !== changedChanged.id
            ? child
            : renamedNode(changedChanged, event.target.value)
        )
      );
    };

  const nameExistsAlready = useMemo(
    () =>
      existingNodes.some(
        (existingNode) =>
          displayNode(existingNode)?.trim() === name.trim() &&
          existingNode.id !== node.id
      ),
    [existingNodes, name, node]
  );

  const handleNodeClassTypeChange: NonNullable<
    SelectProps<string>['onChange']
  > = (event) => {
    const classType = event.target.value as HeterogenousNodeClass;
    const becomingTextAsset = isTextAssetClass(classType);
    setHeterogenousClass(classType);
    onNodeClassTypeChange?.(
      createNode({
        ...node,
        data: becomingTextAsset
          ? { label: '' }
          : { class: classType, image: nodeImageMap[classType] },
      })
    );
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
    onNodeNameChange?.(
      createNode({
        ...node,
        data: { ...(node.style ?? {}), label: event.target.value.trim() },
      })
    );
  };

  const handleNodeClassCodeChange: NonNullable<
    SelectProps<string>['onChange']
  > = (event) => {
    const classCode = event.target.value as NodeClassCode;
    setCode(classCode);
    onNodeClassCodeChange?.(
      createNode({
        ...node,
        data: { ...node.data, code: classCode },
      })
    );
  };

  const handleColorChange: ColorPickerProps['onChange'] = (newColor) => {
    setColor(newColor);
    onNodeColorChange?.(
      createNode({
        ...node,
        style: { ...(node.style ?? {}), background: newColor },
      })
    );
  };

  const handleSave: MouseEventHandler<HTMLButtonElement> = () => {
    const savingAsTextAsset = isTextAssetClass(heterogenousClass);
    const newNodeType: NodeType = savingAsTextAsset
      ? isTopLevelNode
        ? nodeType.ResizableNode
        : nodeType.ResizableSubNode
      : nodeType.ImageNode;

    onSave?.(
      createNode({
        ...node,
        type: newNodeType,
        data: savingAsTextAsset
          ? { ...node.data, label: name.trim() }
          : {
              ...node.data,
              class: heterogenousClass,
              image: nodeImageMap[heterogenousClass],
              code: code,
            },
        style: { ...(node.style ?? {}), background: color },
      })
    );

    if (!hasChildren) {
      return;
    }

    setNodes((previous) =>
      previous.map((node) => {
        const foundInChildrenArrayNode = nodeChildren.find(
          (child) => child.id === node.id
        );

        return foundInChildrenArrayNode ?? node;
      })
    );
  };

  const nameHelperText = nameExistsAlready ? 'This node exists already' : '';

  const nodeHomogenousClassDisplayList = useMemo(
    () =>
      heterogenousNodeClasses.map((classType) => {
        return (
          <MenuItem key={classType} value={classType}>
            {heterogenousNodeClassNameMap[classType]}
          </MenuItem>
        );
      }),
    []
  );

  const nodeClassCodeDisplayList = useMemo(
    () =>
      nodeClassCodeNames.map((classCode) => {
        return (
          <MenuItem key={classCode} value={classCode}>
            {nodeClassCodeNameMap[classCode]}
          </MenuItem>
        );
      }),
    []
  );

  return (
    <FormStyled>
      <Select
        label="Node Class Type"
        inputLabel="Node Class Type"
        value={heterogenousClass}
        onChange={handleNodeClassTypeChange}
        size="small"
      >
        {nodeHomogenousClassDisplayList}
      </Select>
      {isTextAsset ? (
        <TextField
          value={name}
          onChange={handleNameChange}
          label="Node Name"
          size="small"
          error={nameExistsAlready}
          helperText={nameHelperText}
        />
      ) : (
        <Select
          label="Node Class Code"
          inputLabel="Node Class Code"
          value={code}
          onChange={handleNodeClassCodeChange}
          size="small"
        >
          {nodeClassCodeDisplayList}
        </Select>
      )}
      <ColorPicker
        value={color}
        onChange={handleColorChange}
        label="Node Color"
        size="small"
      />
      {hasParent && nodeParent && (
        <TextField
          disabled
          label={parentNodeInputLabel}
          size="small"
          value={`${displayNode(nodeParent)}`}
        />
      )}

      {hasChildren &&
        nodeChildren.map((child, index) => (
          <TextField
            key={child.id}
            label={`Subcomponent ${index + 1} `}
            size="small"
            value={displayNode(child)}
            onChange={handleChildNameChange(child)}
          />
        ))}
      <SaveButtonStyled
        onClick={handleSave}
        variant="contained"
        disabled={nameExistsAlready}
      >
        Save
      </SaveButtonStyled>
    </FormStyled>
  );
};

export default NodeEditForm;
