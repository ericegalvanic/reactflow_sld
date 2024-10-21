import { StrictExtract } from '@/common/types';
import { nodeClassCode, NodeClassCode } from './NodeClassCode';

export type TopLevelNodeClassCode = StrictExtract<
  NodeClassCode,
  | 'ATSW-LV'
  | 'ATSW-MV'
  | 'MTSW-LV'
  | 'MTSW-MV'
  | 'DTTR-LV'
  | 'DTTR-MV'
  | 'OFTR'
  | 'PCAP'
  | 'SCAP'
  | 'BISW-LV'
  | 'BISW-MV'
  | 'BPSW'
  | 'DISC-F-LV'
  | 'DISC-F-MV'
  | 'DISC-LV'
  | 'DISC-MV'
  | 'HPSW'
  | 'LISW'
  | 'DPNL'
  | 'MCEQ-LV'
  | 'MCEQ-MV'
  | 'PANL'
  | 'PDUX'
  | 'SWBD'
  | 'SWGR-LV'
  | 'SWGR-MV'
  | 'USSX-LV'
  | 'USSX-MV'
  | 'UPSH'
  | 'UPSR'
  | 'UPSS'
  | 'GENR'
  | 'EMRE'
  | 'MPRE'
  | 'SSRE'
  | 'LVMT-DC'
  | 'LVMT-L'
  | 'LVMT-S'
  | 'MVIN'
  | 'MVSC'
  | 'CBBX'
  | 'ENCL'
  | 'ENDX'
  | 'EVCS'
  | 'FSBX'
  | 'INVR'
  | 'JCBX'
  | 'Other'
  | 'RCTF'
  | 'REAC'
  | 'SOLR'
  | 'WIND'
>;

export const topLevelNodeClasses: Array<TopLevelNodeClassCode> = [
  nodeClassCode['ATSW-LV'],
  nodeClassCode['ATSW-MV'],
  nodeClassCode['MTSW-LV'],
  nodeClassCode['MTSW-MV'],
  nodeClassCode['DTTR-LV'],
  nodeClassCode['DTTR-MV'],
  nodeClassCode['OFTR'],
  nodeClassCode['PCAP'],
  nodeClassCode['SCAP'],
  nodeClassCode['BISW-LV'],
  nodeClassCode['BISW-MV'],
  nodeClassCode['BPSW'],
  nodeClassCode['DISC-F-LV'],
  nodeClassCode['DISC-F-MV'],
  nodeClassCode['DISC-LV'],
  nodeClassCode['DISC-MV'],
  nodeClassCode['HPSW'],
  nodeClassCode['LISW'],
  nodeClassCode['DPNL'],
  nodeClassCode['MCEQ-LV'],
  nodeClassCode['MCEQ-MV'],
  nodeClassCode['PANL'],
  nodeClassCode['PDUX'],
  nodeClassCode['SWBD'],
  nodeClassCode['SWGR-LV'],
  nodeClassCode['SWGR-MV'],
  nodeClassCode['USSX-LV'],
  nodeClassCode['USSX-MV'],
  nodeClassCode['UPSH'],
  nodeClassCode['UPSR'],
  nodeClassCode['UPSS'],
  nodeClassCode['GENR'],
  nodeClassCode['EMRE'],
  nodeClassCode['MPRE'],
  nodeClassCode['SSRE'],
  nodeClassCode['LVMT-DC'],
  nodeClassCode['LVMT-L'],
  nodeClassCode['LVMT-S'],
  nodeClassCode['MVIN'],
  nodeClassCode['MVSC'],
  nodeClassCode['CBBX'],
  nodeClassCode['ENCL'],
  nodeClassCode['ENDX'],
  nodeClassCode['EVCS'],
  nodeClassCode['FSBX'],
  nodeClassCode['INVR'],
  nodeClassCode['JCBX'],
  nodeClassCode['Other'],
  nodeClassCode['RCTF'],
  nodeClassCode['REAC'],
  nodeClassCode['SOLR'],
  nodeClassCode['WIND'],
];
