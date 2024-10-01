/* eslint-disable react-hooks/rules-of-hooks */
import {
  createNodeComponent,
  HasId,
  IsNodeComponent,
  NodeFC,
  PopupAnchor,
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

const NodeComponent = <P = {},>(
  OriginalNodeComponent: NodeFC<P & HasId>
): IsNodeComponent<P & HasId> =>
  createNodeComponent((props) => {
    const { changesEnabled } = useFlow();
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
        />
        <Popup
          id={popupId}
          anchor={popupAnchor}
          open={showPopup}
          placement="top"
        >
          <PopupCore>{props.id}</PopupCore>
        </Popup>
      </>
    );
  });

export default NodeComponent;
