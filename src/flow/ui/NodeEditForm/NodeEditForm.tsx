import { RFNode } from '@/common/entities';
import { FormStyled, SaveButtonStyled } from './NodeEditForm.styles';
import {
  ChangeEventHandler,
  MouseEventHandler,
  useMemo,
  useState,
} from 'react';
import { NodeEditFormUpdateHandle } from './NodeEditForm.types';
import TextField from '@/common/ui/TextField';
import { nodeColor, nodeName } from '@/common/utils';
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
  const { nodes: existingNodes } = useFlow();
  const [name, setName] = useState(nodeName(node) ?? '');
  const [color, setColor] = useState(nodeColor(node) ?? '');

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
