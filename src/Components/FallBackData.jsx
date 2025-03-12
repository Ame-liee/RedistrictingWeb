import MapSMDMS from "../data/SampleMaps/SMD/MS.json";
import MapMMDMS from "../data/SampleMaps/MMD/MS.json";
import MapSMDAL from "../data/SampleMaps/SMD/AL.json";
import MapMMDAL from "../data/SampleMaps/MMD/AL.json";
import MapSMDPA from "../data/SampleMaps/SMD/PA.json";
import MapMMDPA from "../data/SampleMaps/MMD/PA.json";

import StateInfoMS from "../data/StateInfo/MS.json";
import StateInfoAL from "../data/StateInfo/AL.json";
import StateInfoPA from "../data/StateInfo/PA.json";

import EnsembleMS from "../data/Ensemble/MS.json";
import EnsembleAL from "../data/Ensemble/AL.json";
import EnsemblePA from "../data/Ensemble/PA.json";

import RandomSMDDemMS from "../data/Plans/MS/SMD/dem.json";
import RandomSMDRepMS from "../data/Plans/MS/SMD/rep.json";
import RandomSMDNonWhtMS from "../data/Plans/MS/SMD/non_wht_prob_max.json";
import RandomSMDWhtMS from "../data/Plans/MS/SMD/wht_prob_max.json";
import RandomSMDOpMaxMS from "../data/Plans/MS/SMD/op_max.json";
import RandomMMDDemMS from "../data/Plans/MS/MMD/dem.json";
import RandomMMDRepMS from "../data/Plans/MS/MMD/rep.json";
import RandomMMDNonWhtMS from "../data/Plans/MS/MMD/non_wht_prob_max.json";
import RandomMMDWhtMS from "../data/Plans/MS/MMD/wht_prob_max.json";
import RandomMMDOpMaxMS from "../data/Plans/MS/MMD/op_max.json";

import RandomSMDDemAL from "../data/Plans/AL/SMD/dem.json";
import RandomSMDRepAL from "../data/Plans/AL/SMD/rep.json";
import RandomSMDNonWhtAL from "../data/Plans/AL/SMD/non_wht_prob_max.json";
import RandomSMDWhtAL from "../data/Plans/AL/SMD/wht_prob_max.json";
import RandomSMDOpMaxAL from "../data/Plans/AL/SMD/op_max.json";
import RandomMMDDemAL from "../data/Plans/AL/MMD/dem.json";
import RandomMMDRepAL from "../data/Plans/AL/MMD/rep.json";
import RandomMMDNonWhtAL from "../data/Plans/AL/MMD/non_wht_prob_max.json";
import RandomMMDWhtAL from "../data/Plans/AL/MMD/wht_prob_max.json";
import RandomMMDOpMaxAL from "../data/Plans/AL/MMD/op_max.json";

import RandomSMDDemPA from "../data/Plans/PA/SMD/dem.json";
import RandomSMDRepPA from "../data/Plans/PA/SMD/rep.json";
import RandomSMDNonWhtPA from "../data/Plans/PA/SMD/non_wht_prob_max.json";
import RandomSMDWhtPA from "../data/Plans/PA/SMD/wht_prob_max.json";
import RandomSMDOpMaxPA from "../data/Plans/PA/SMD/op_max.json";
import RandomMMDDemPA from "../data/Plans/PA/MMD/dem.json";
import RandomMMDRepPA from "../data/Plans/PA/MMD/rep.json";
import RandomMMDNonWhtPA from "../data/Plans/PA/MMD/non_wht_prob_max.json";
import RandomMMDWhtPA from "../data/Plans/PA/MMD/wht_prob_max.json";
import RandomMMDOpMaxPA from "../data/Plans/PA/MMD/op_max.json";

const fallbackData = {
  map: {
    ms: { smd: MapSMDMS, mmd: MapMMDMS },
    al: { smd: MapSMDAL, mmd: MapMMDAL },
    pa: { smd: MapSMDPA, mmd: MapMMDPA },
  },
  stateInfo: {
    ms: StateInfoMS,
    al: StateInfoAL,
    pa: StateInfoPA,
  },
  ensemble: { ms: EnsembleMS, al: EnsembleAL, pa: EnsemblePA },
  random: {
    ms: {
      smd: {
        republican: RandomSMDRepMS,
        democratic: RandomSMDDemMS,
        "non-white-max": RandomSMDNonWhtMS,
        "white-max": RandomSMDWhtMS,
        "opportunity-max": RandomSMDOpMaxMS,
      },
      mmd: {
        republican: RandomMMDRepMS,
        democratic: RandomMMDDemMS,
        "non-white-max": RandomMMDNonWhtMS,
        "white-max": RandomMMDWhtMS,
        "opportunity-max": RandomMMDOpMaxMS,
      },
    },
    al: {
      smd: {
        republican: RandomSMDRepAL,
        democratic: RandomSMDDemAL,
        "non-white-max": RandomSMDNonWhtAL,
        "white-max": RandomSMDWhtAL,
        "opportunity-max": RandomSMDOpMaxAL,
      },
      mmd: {
        republican: RandomMMDRepAL,
        democratic: RandomMMDDemAL,
        "non-white-max": RandomMMDNonWhtAL,
        "white-max": RandomMMDWhtAL,
        "opportunity-max": RandomMMDOpMaxAL,
      },
    },
    pa: {
      smd: {
        republican: RandomSMDRepPA,
        democratic: RandomSMDDemPA,
        "non-white-max": RandomSMDNonWhtPA,
        "white-max": RandomSMDWhtPA,
        "opportunity-max": RandomSMDOpMaxPA,
      },
      mmd: {
        republican: RandomMMDRepPA,
        democratic: RandomMMDDemPA,
        "non-white-max": RandomMMDNonWhtPA,
        "white-max": RandomMMDWhtPA,
        "opportunity-max": RandomMMDOpMaxPA,
      },
    },
  },
};

const FallBackData = (option) => fallbackData[option];

export default FallBackData;
