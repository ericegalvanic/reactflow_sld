import { RFNode } from '@/common/entities';
import {
  ClassCodeStyled,
  FormStyled,
  MenuItemStyled,
  SaveButtonStyled,
} from './NodeEditForm.styles';
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
  node as createNode,
  isImplicitClassType,
  hasImplicitClassType,
} from '@/flow/utils';
import ColorPicker, { ColorPickerProps } from '@/common/ui/ColorPicker';
import { useFlow } from '@/flow/context';
import Select, { SelectProps } from '@/common/ui/Select';
import { nodeClass } from '@/flow/utils/nodeClass';
import {
  NodeClassCode,
  nodeClassCodeNameMap,
  nodeClassCodeShortNameMap,
  nodeClassNodeTypeMap,
  NodeType,
  nodeType,
  SubLevelNodeClassCode,
  subLevelNodeClasses,
  subLevelNodeCodeClassMap,
  TopLevelNodeClassCode,
  topLevelNodeClasses,
  topLevelNodeCodeNodeClassMap,
} from '@/flow/entities';
import { nodeImageMap } from '@/flow/data/nodeImageMap';

export type NodeEditFormProps = {
  node: RFNode;
  onSave?: NodeEditFormUpdateHandle;
  onNodeNameChange?: NodeEditFormUpdateHandle;
  onNodeColorChange?: NodeEditFormUpdateHandle;
  onNodeClassCodeChange?: NodeEditFormUpdateHandle;
};

const NodeEditForm: React.FC<NodeEditFormProps> = ({
  node,
  onSave,
  onNodeNameChange,
  onNodeColorChange,
  onNodeClassCodeChange,
}) => {
  const { nodes: existingNodes, setNodes } = useFlow();
  const [name, setName] = useState(() => nodeName(node) ?? '');
  const [color, setColor] = useState(() => nodeColor(node).background ?? '');
  const [code, setCode] = useState(() => nodeClassCode(node));
  const [nodeChildren, setNodeChildren] = useState(() =>
    children(node, existingNodes)
  );

  const hasParent = useMemo(() => isSubNode(node), [node]);
  const isTopLevelNode = useMemo(() => !hasParent, [hasParent]);

  const heterogenousClass = nodeClass(node);
  const isWithImplicitClass = hasImplicitClassType(node);
  const hasName = nodeWithName(node);
  const nodeParent = parent(node, existingNodes);
  const hasChildren = isParent(node, existingNodes);
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

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
    onNodeNameChange?.(
      createNode({
        ...node,
        data: { ...node.data, label: event.target.value.trim() },
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
        data: { ...node.data, background: newColor },
      })
    );
  };

  const handleSave: MouseEventHandler<HTMLButtonElement> = () => {
    const savingAsTextAsset = isTextAssetClass(heterogenousClass);
    const topLevelNodeClass =
      topLevelNodeCodeNodeClassMap[code as TopLevelNodeClassCode];
    const subLevelNodeClass =
      subLevelNodeCodeClassMap[code as SubLevelNodeClassCode];

    const newClass = !savingAsTextAsset
      ? isTopLevelNode
        ? topLevelNodeClass
        : subLevelNodeClass
      : null;

    const newNodeType: NodeType = savingAsTextAsset
      ? isTopLevelNode
        ? nodeType.ResizableNode
        : nodeType.ResizableSubNode
      : isTopLevelNode
      ? isImplicitClassType(topLevelNodeClass)
        ? nodeClassNodeTypeMap[topLevelNodeClass]
        : nodeType.ImageNode
      : isImplicitClassType(subLevelNodeClass)
      ? nodeClassNodeTypeMap[subLevelNodeClass]
      : nodeType.ImageSubNode;

    onSave?.(
      createNode({
        ...node,
        type: newNodeType,
        data: savingAsTextAsset
          ? { ...node.data, label: name.trim(), background: color }
          : {
              ...node.data,
              class: newClass ?? heterogenousClass,
              image: nodeImageMap[newClass ?? heterogenousClass],
              code: code,
              background: color,
              ...(isWithImplicitClass ? { label: name.trim() } : {}),
            },
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

  const nodeClassCodeDisplayList = useMemo(
    () =>
      (isTopLevelNode ? topLevelNodeClasses : subLevelNodeClasses).map(
        (classCode) => {
          return (
            <MenuItemStyled key={classCode} value={classCode}>
              {nodeClassCodeNameMap[classCode]}
              <ClassCodeStyled>
                {nodeClassCodeShortNameMap[classCode]}
              </ClassCodeStyled>
            </MenuItemStyled>
          );
        }
      ),
    [isTopLevelNode]
  );

  return (
    <FormStyled>
      <Select
        label="Node Class Code"
        inputLabel="Node Class Code"
        value={code}
        onChange={handleNodeClassCodeChange}
        size="small"
      >
        {nodeClassCodeDisplayList}
      </Select>
      {isWithImplicitClass && isTopLevelNode && (
        <TextField
          value={name}
          onChange={handleNameChange}
          label="Node Name"
          size="small"
          error={nameExistsAlready}
          helperText={nameHelperText}
        />
      )}
      {isTopLevelNode && (
        <ColorPicker
          value={color}
          onChange={handleColorChange}
          label="Node Color"
          size="small"
        />
      )}
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
