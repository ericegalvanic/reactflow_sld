import { ObjectValues } from '@/common/types';

export const nodeClassCode = {
  ARCB: 'ARCB',
  AMCB: 'AMCB',
  CTCR: 'CTCR',
  GICB: 'GICB',
  ICCB: 'ICCB',
  LVCB: 'LVCB',
  'MCCB-L-LV': 'MCCB-L-LV',
  'MCCB-S-LV': 'MCCB-S-LV',
  OICB: 'OICB',
  RCLS: 'RCLS',
  VCCB: 'VCCB',
  DPNL: 'DPNL',
  'MCEQ-LV': 'MCEQ-LV',
  'MCEQ-MV': 'MCEQ-MV',
  PANL: 'PANL',
  PDUX: 'PDUX',
  SWBD: 'SWBD',
  'SWGR-LV': 'SWGR-LV',
  'SWGR-MV': 'SWGR-MV',
  'USSX-LV': 'USSX-LV',
  'USSX-MV': 'USSX-MV',
  'FUSE-LV': 'FUSE-LV',
  'FUSE-MV': 'FUSE-MV',
  GENR: 'GENR',
  'GFPS-E-LV': 'GFPS-E-LV',
  'GFPS-E-MV': 'GFPS-E-MV',
  'GFPS-I-LV': 'GFPS-I-LV',
  'GFPS-I-MV': 'GFPS-I-MV',
  REGR: 'REGR',
  BNDG: 'BNDG',
  GRND: 'GRND',
  CITR: 'CITR',
  PITR: 'PITR',
  AMME: 'AMME',
  LIMI: 'LIMI',
  MMME: 'MMME',
  VVME: 'VVME',
  WHME: 'WHME',
  CBBX: 'CBBX',
  ENCL: 'ENCL',
  ENDX: 'ENDX',
  EVCS: 'EVCS',
  FSBX: 'FSBX',
  INVR: 'INVR',
  JCBX: 'JCBX',
  Other: 'Other',
  RCTF: 'RCTF',
  REAC: 'REAC',
  SOLR: 'SOLR',
  WIND: 'WIND',
  'LVMT-DC': 'LVMT-DC',
  'LVMT-L': 'LVMT-L',
  'LVMT-S': 'LVMT-S',
  MVIN: 'MVIN',
  MVSC: 'MVSC',
  EMRE: 'EMRE',
  MPRE: 'MPRE',
  SSRE: 'SSRE',
  'BISW-LV': 'BISW-LV',
  'BISW-MV': 'BISW-MV',
  BPSW: 'BPSW',
  'DISC-F-LV': 'DISC-F-LV',
  'DISC-F-MV': 'DISC-F-MV',
  'DISC-LV': 'DISC-LV',
  'DISC-MV': 'DISC-MV',
  HPSW: 'HPSW',
  LISW: 'LISW',
  'ATSW-LV': 'ATSW-LV',
  'ATSW-MV': 'ATSW-MV',
  'MTSW-LV': 'MTSW-LV',
  'MTSW-MV': 'MTSW-MV',
  'DTTR-LV': 'DTTR-LV',
  'DTTR-MV': 'DTTR-MV',
  OFTR: 'OFTR',
  UPSH: 'UPSH',
  UPSR: 'UPSR',
  UPSS: 'UPSS',
  PCAP: 'PCAP',
  SCAP: 'SCAP',
} as const satisfies Record<string, string>;

export type NodeClassCode = ObjectValues<typeof nodeClassCode>;

export const nodeClassCodeNameMap: Record<NodeClassCode, string> = {
  ARCB: 'ARCB Circuit Breaker',
  AMCB: 'Medium-Voltage Air Magnetic Circuit Breaker',
  CTCR: 'Contactor',
  GICB: 'Medim-Voltage Gas Insulated Circuit Breaker',
  ICCB: 'Low-Voltage Insulated Case Circuit Breaker',
  LVCB: 'Low-Voltage Power Circuit Breaker',
  'MCCB-L-LV': 'Low-Voltage Molded Case Circuit Breaker (> 250A)',
  'MCCB-S-LV': 'Low-Voltage Molded Case Circuit Breaker (<= 250A)',
  OICB: 'Medium-Voltage Oil Insulated Circuit Breaker',
  RCLS: 'Recloser',
  VCCB: 'Medium-Voltage Vacuum Circuit Breaker',
  DPNL: 'Distribution Panelboard',
  'MCEQ-LV': 'Motor Control Equipment (<=1000V)',
  'MCEQ-MV': 'Motor Control Equipment (>1000V)',
  PANL: 'Panelboard',
  PDUX: 'Power Distribution Unit',
  SWBD: 'Switchboard',
  'SWGR-LV': 'Switchgear (<= 1000V)',
  'SWGR-MV': 'Switchgear (> 1000V)',
  'USSX-LV': 'Unitized Substation (USS) (<= 1000V)',
  'USSX-MV': 'Unitized Substation (USS) (> 1000V)',
  'FUSE-LV': 'Fuse (<= 1000V)',
  'FUSE-MV': 'Fuse (> 1000V)',
  GENR: 'Generator',
  'GFPS-E-LV': 'Low-Voltage External Ground Fault Protection System',
  'GFPS-E-MV': 'Medium-Voltage External Ground Fault Protection System',
  'GFPS-I-LV': 'Low-Voltage Integral Ground Fault Protection System',
  'GFPS-I-MV': 'Medium-Voltage Integral Ground Fault Protection System',
  REGR: 'Ground Resistor',
  BNDG: 'Bonding',
  GRND: 'Grounding',
  CITR: 'Current Transformer',
  PITR: 'Potential Transformer',
  AMME: 'Ammeter',
  LIMI: 'Line Isolation Monitor',
  MMME: 'Multimeter',
  VVME: 'Votmeter',
  WHME: 'Watt-Hour Meter',
  CBBX: 'Combiner Box',
  ENCL: 'General Enclosure',
  ENDX: 'General Endpoint',
  EVCS: 'Electrical Vehicle Charging Station',
  FSBX: 'Fuse Box',
  INVR: 'Inverter',
  JCBX: 'Junction Box',
  Other: 'Other',
  RCTF: 'Recitifier',
  REAC: 'Reactor',
  SOLR: 'Solar Photovoltaic System',
  WIND: 'Wind Power System',
  'LVMT-DC': 'Low-Voltage Motor (dc)',
  'LVMT-L': 'Low-Voltage Motor (>200hp)',
  'LVMT-S': 'Low-Voltage Motor (<= 200hp)',
  MVIN: 'Medium-Voltage Induction Motor',
  MVSC: 'Medium-Voltage Synchronous Motor',
  EMRE: 'Electromechanical Relay',
  MPRE: 'Microprocessor Relay',
  SSRE: 'Solid-State Relay',
  'BISW-LV': 'Bypass-Isolation Switch (<= 1000V)',
  'BISW-MV': 'Bypass-Isolation Switch (> 1000V)',
  BPSW: 'Bolted-Pressure Switch (BPS)',
  'DISC-F-LV': 'Fused Disconnect Switch (<= 1000V)',
  'DISC-F-MV': 'Fused Disconnect Switch (>1000V)',
  'DISC-LV': 'Disconnect Switch (<= 1000V)',
  'DISC-MV': 'Disconnect Switch (>1000V)',
  HPSW: 'High-Pressure Contact Switch (HPC)',
  LISW: 'Load-Interruptor Switch',
  'ATSW-LV': 'Automatic Transfer Switch (<= 1000V)',
  'ATSW-MV': 'Automatic Transfer Switch (>1000V)',
  'MTSW-LV': 'Transfer Switch (<= 1000V)',
  'MTSW-MV': 'Transfer Switch (> 1000V)',
  'DTTR-LV': 'Dry-Type Transformer (<=600V)',
  'DTTR-MV': 'Dry-Type Transformer (>600V)',
  OFTR: 'Oil-Filled Transformer',
  UPSH: 'Hybrid UPS System',
  UPSR: 'Rotary UPS System',
  UPSS: 'Static UPS System',
  PCAP: 'P-Capacitor',
  SCAP: 'S-Capcitor',
};

export const nodeClassCodeNames: NodeClassCode[] = [
  'ARCB',
  'AMCB',
  'CTCR',
  'GICB',
  'ICCB',
  'LVCB',
  'MCCB-L-LV',
  'MCCB-S-LV',
  'OICB',
  'RCLS',
  'VCCB',
  'DPNL',
  'MCEQ-LV',
  'MCEQ-MV',
  'PANL',
  'PDUX',
  'SWBD',
  'SWGR-LV',
  'SWGR-MV',
  'USSX-LV',
  'USSX-MV',
  'FUSE-LV',
  'FUSE-MV',
  'GENR',
  'GFPS-E-LV',
  'GFPS-E-MV',
  'GFPS-I-LV',
  'GFPS-I-MV',
  'REGR',
  'BNDG',
  'GRND',
  'CITR',
  'PITR',
  'AMME',
  'LIMI',
  'MMME',
  'VVME',
  'WHME',
  'CBBX',
  'ENCL',
  'ENDX',
  'EVCS',
  'FSBX',
  'INVR',
  'JCBX',
  'Other',
  'RCTF',
  'REAC',
  'SOLR',
  'WIND',
  'LVMT-DC',
  'LVMT-L',
  'LVMT-S',
  'MVIN',
  'MVSC',
  'EMRE',
  'MPRE',
  'SSRE',
  'BISW-LV',
  'BISW-MV',
  'BPSW',
  'DISC-F-LV',
  'DISC-F-MV',
  'DISC-LV',
  'DISC-MV',
  'HPSW',
  'LISW',
  'ATSW-LV',
  'ATSW-MV',
  'MTSW-LV',
  'MTSW-MV',
  'DTTR-LV',
  'DTTR-MV',
  'OFTR',
  'UPSH',
  'UPSR',
  'UPSS',
  'PCAP',
  'SCAP',
];
