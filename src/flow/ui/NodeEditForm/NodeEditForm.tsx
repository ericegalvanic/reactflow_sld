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
  isParent,
  isSubNode,
  nodeColor,
  nodeName,
  parent,
  renamedNode,
} from '@/common/utils';
import ColorPicker, { ColorPickerProps } from '@/common/ui/ColorPicker';
import { node as createNode } from '@/common/utils';
import { useFlow } from '@/flow/context';

export type NodeEditFormProps = {
  node: RFNode;
  onSave?: NodeEditFormUpdateHandle;
  onNodeNameChange?: NodeEditFormUpdateHandle;
  onNodeColorChange?: NodeEditFormUpdateHandle;
};

const NodeEditForm: React.FC<NodeEditFormProps> = ({
  node,
  onSave,
  onNodeNameChange,
  onNodeColorChange,
}) => {
  const { nodes: existingNodes, setNodes } = useFlow();
  const [name, setName] = useState(nodeName(node) ?? '');
  const [color, setColor] = useState(nodeColor(node) ?? '');

  const hasParent = isSubNode(node);
  const nodeParent = parent(node, existingNodes);
  const hasChildren = isParent(node, existingNodes);
  const [nodeChildren, setNodeChildren] = useState(() =>
    children(node, existingNodes)
  );

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
          nodeName(existingNode)?.trim() === name.trim() &&
          existingNode.id !== node.id
      ),
    [existingNodes, name, node]
  );

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
    onNodeNameChange?.(
      createNode({
        ...node,
        data: { ...(node.style ?? {}), label: event.target.value.trim() },
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
    onSave?.(
      createNode({
        ...node,
        data: { ...node.data, label: name.trim() },
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

  return (
    <FormStyled>
      <TextField
        value={name}
        onChange={handleNameChange}
        label="Node Name"
        size="small"
        error={nameExistsAlready}
        helperText={nameHelperText}
      />
      <ColorPicker
        value={color}
        onChange={handleColorChange}
        label="Node Color"
        size="small"
      />
      {hasParent && nodeParent && (
        <TextField
          disabled
          label="Parent name"
          size="small"
          value={`${nodeName(nodeParent)}`}
        />
      )}
      {hasChildren &&
        nodeChildren.map((child, index) => (
          <TextField
            key={child.id}
            label={`Subcomponent ${index + 1} `}
            size="small"
            value={nodeName(child)}
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
