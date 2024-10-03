/* eslint-disable react-hooks/rules-of-hooks */
import {
  createNodeComponent,
  HasId,
  IsNodeComponent,
  NodeFC,
  PopupAnchor,
  RFNode,
} from '@/common/entities';
import { useBoolean } from '@/common/hooks';
import { useFlow } from '@/flow/context';
import {
  useNodeHandlePosition,
  useParentRotation,
  useRotatableNode,
} from '@/flow/hooks';
import Popup from '../Popup';
import PopupCore from '../PopupCore';
import { MouseEventHandler, useState } from 'react';
import {
  displayNode,
  nodeClass,
  nodeClassCode,
  nodeClosestParent,
  nodeColor,
} from '@/flow/utils';
import {
  NodePropertyNameStyled,
  NodePropertyRowStyled,
  NodePropertyValueStyled,
} from './NodeComponent.styles';
import { Nullable } from '@/common/types';
import { assertImperatively } from '@/common/utils';

const NodeComponent = <P = {},>(
  OriginalNodeComponent: NodeFC<P & HasId>
): IsNodeComponent<P & HasId> =>
  createNodeComponent((props) => {
    const { changesEnabled, nodes, edges } = useFlow();
    const [showPopup, setShowPopup, invokePopup, hidePopup] = useBoolean();
    const [popupAnchor, setPopupAnchor] = useState<PopupAnchor>(null);

    const nodeHandlePositionHookData = useNodeHandlePosition();
    const rotatableNodeHookData = useRotatableNode(props.id, {
      rotatable: changesEnabled,
    });
    const parentRotation = useParentRotation(props.id);

    const popupId = `popup-${props.id}`;

    const handleNodeBaseHover: MouseEventHandler<HTMLDivElement> = () => {
      invokePopup();
    };

    const handleNodeBaseMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
      hidePopup();
    };

    const theNode = props;
    assertImperatively<RFNode>(theNode);

    const theNodeName = displayNode(theNode);
    const theNodeClass = nodeClass(theNode);
    const theNodeCode = nodeClassCode(theNode);
    const theClosestParent: Nullable<RFNode> = nodeClosestParent(
      theNode,
      nodes,
      edges
    );
    const theNodeColor = nodeColor(theNode);

    return (
      <>
        <OriginalNodeComponent
          {...props}
          {...nodeHandlePositionHookData}
          {...rotatableNodeHookData}
          parentRotation={parentRotation}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          popupAnchor={popupAnchor}
          setPopupAnchor={setPopupAnchor}
          handleNodeBaseHover={handleNodeBaseHover}
          handleNodeBaseMouseLeave={handleNodeBaseMouseLeave}
          nodeColor={theNodeColor}
        />
        <Popup
          id={popupId}
          anchor={popupAnchor}
          open={showPopup}
          placement="top"
        >
          <PopupCore>
            <NodePropertyRowStyled>
              <NodePropertyNameStyled>Name:</NodePropertyNameStyled>
              <NodePropertyValueStyled>{theNodeName}</NodePropertyValueStyled>
            </NodePropertyRowStyled>
            <NodePropertyRowStyled>
              <NodePropertyNameStyled>Class:</NodePropertyNameStyled>
              <NodePropertyValueStyled>{theNodeClass}</NodePropertyValueStyled>
            </NodePropertyRowStyled>
            {theNodeCode && (
              <NodePropertyRowStyled>
                <NodePropertyNameStyled>Class Code:</NodePropertyNameStyled>
                <NodePropertyValueStyled>{theNodeCode}</NodePropertyValueStyled>
              </NodePropertyRowStyled>
            )}
            {theClosestParent && (
              <NodePropertyRowStyled>
                <NodePropertyNameStyled>Closest Parent:</NodePropertyNameStyled>
                <NodePropertyValueStyled>
                  {displayNode(theClosestParent)}
                </NodePropertyValueStyled>
              </NodePropertyRowStyled>
            )}
          </PopupCore>
        </Popup>
      </>
    );
  });

export default NodeComponent;
