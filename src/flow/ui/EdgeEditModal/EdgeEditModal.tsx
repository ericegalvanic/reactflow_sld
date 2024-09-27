import Modal, { ModalProps } from '@/common/ui/Modal';
import ModalTitle from '@/common/ui/ModalTitle';
import {
  FormStyled,
  NodeIdRowStyled,
  SaveButtonStyled,
} from './EdgeEditModal.styles';
import { RFEdge } from '@/common/entities';
import {
  ChangeEventHandler,
  MouseEventHandler,
  useId,
  useMemo,
  useState,
} from 'react';
import { displayNode, edgeColor, edge as createEdge } from '@/flow/utils';
import TextField from '@/common/ui/TextField';
import ColorPicker, { ColorPickerProps } from '@/common/ui/ColorPicker';
import Select, { SelectProps } from '@/common/ui/Select';
import { useFlow } from '@/flow/context';
import MenuItem from '@/common/ui/MenuItem';

export type EdgeEditModalProps = {
  edge: RFEdge;
  onSave: (edge: RFEdge) => void;
} & ModalProps;

const EdgeEditModal: React.FC<EdgeEditModalProps> = (props) => {
  const { edge, onSave, onClose, maxWidth, ...restProps } = props;

  const { nodes } = useFlow();

  const [name, setName] = useState(edge.label ?? '');
  const [color, setColor] = useState(edgeColor(edge) ?? '');
  const [sourceNodeId, setSourceNodeId] = useState(edge.source);
  const [targetNodeId, setTargetNodeId] = useState(edge.target);

  const formId = useId();
  const nameInputId = `${formId}-edit-edge-name`;
  const colorInputId = `${formId}-edit-edge-color`;
  const sourceNodeSelectId = `${formId}-edit-source-node`;
  const sourceNodeSelectLabelId = `${formId}-edit-source-node-label`;
  const targetNodeSelectId = `${formId}-edit-target-node`;
  const targetNodeSelectLabelId = `${formId}-edit-target-node-label`;

  const handleClose: NonNullable<ModalProps['onClose']> = (...args) => {
    onClose?.(...args);
  };

  const handleEdgeNameChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setName(event.target.value);
  };

  const handleColorChange: ColorPickerProps['onChange'] = (newColor) => {
    setColor(newColor);
  };

  const handleEdgeSave: MouseEventHandler<HTMLButtonElement> = () => {
    onSave(
      createEdge({
        ...edge,
        label: name,
        source: sourceNodeId,
        target: targetNodeId,
        style: {
          ...(edge.style ?? {}),
          stroke: color,
        },
      })
    );
  };

  const handleSourceNodeChange: NonNullable<SelectProps<string>['onChange']> = (
    event
  ) => {
    setSourceNodeId(event.target.value);
  };

  const handleTargetNodeChange: NonNullable<SelectProps<string>['onChange']> = (
    event
  ) => {
    setTargetNodeId(event.target.value);
  };

  const nodeDisplayList = useMemo(
    () =>
      nodes.map((node) => (
        <MenuItem key={node.id} value={node.id}>
          {displayNode(node)}
        </MenuItem>
      )),
    [nodes]
  );

  const edgeParentsError = sourceNodeId === targetNodeId;
  const saveDisabled = edgeParentsError;
  const selectHelperText = edgeParentsError
    ? 'Cannot choose the same node'
    : '';

  return (
    <Modal onClose={handleClose} maxWidth={maxWidth ?? 'sm'} {...restProps}>
      <ModalTitle>Edit Edge</ModalTitle>
      <FormStyled id={formId}>
        <TextField
          value={name}
          onChange={handleEdgeNameChange}
          label="Edge name"
          size="small"
          id={nameInputId}
        />
        <ColorPicker
          value={color}
          onChange={handleColorChange}
          label="Edge Color"
          size="small"
          id={colorInputId}
        />
        <NodeIdRowStyled>
          <Select
            id={sourceNodeSelectId}
            labelId={sourceNodeSelectLabelId}
            inputLabelId={sourceNodeSelectLabelId}
            label="Source Node Id"
            inputLabel="Source Node Id"
            formControlProps={{ fullWidth: true, error: edgeParentsError }}
            value={sourceNodeId}
            onChange={handleSourceNodeChange}
            helperText={selectHelperText}
          >
            {nodeDisplayList}
          </Select>
          <Select
            id={targetNodeSelectId}
            labelId={targetNodeSelectLabelId}
            inputLabelId={targetNodeSelectLabelId}
            label="Target Node Id"
            inputLabel="Target Node Id"
            formControlProps={{ fullWidth: true, error: edgeParentsError }}
            value={targetNodeId}
            onChange={handleTargetNodeChange}
            helperText={selectHelperText}
          >
            {nodeDisplayList}
          </Select>
        </NodeIdRowStyled>
        <SaveButtonStyled
          onClick={handleEdgeSave}
          variant="contained"
          disabled={saveDisabled}
        >
          Save
        </SaveButtonStyled>
      </FormStyled>
    </Modal>
  );
};

export default EdgeEditModal;
