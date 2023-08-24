import API from "@/constants/api";
import store from "@/store";
import axiosUtil from "@/Utils/axios.util";
import { AxiosResponse } from "axios";
import Token from "./token";

async function reCharge(): Promise<AxiosResponse> {
  const token = Token.token;
  const url = API.panel.reCharge;
  const body = {
    operator: store.state.panel.dataReCharge.operator,
    amount: store.state.panel.dataReCharge.amount,
    mobile: store.state.panel.dataReCharge.mobile,
    rechargeCode: store.state.panel.dataReCharge.rechargecode,
    optionalMessage: store.state.panel.dataReCharge.optionalMessage,
  };

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function billPayment(): Promise<AxiosResponse> {
  const token = Token.token;
  const url = API.panel.billPayment;
  const body = {
    id: store.state.panel.billing.id,
    devicetype: "web",
  };

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function billInfo(): Promise<AxiosResponse> {
  const token = Token.token;
  const url = API.panel.billInfo;
  const body = {
    type: store.state.panel.billing.operator,
    id: store.state.panel.billing.id,
    title: store.state.panel.billing.billTitleSelecting,
    isSave: store.state.panel.billing.isActive,
  };

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function packageCategories(): Promise<AxiosResponse> {
  const token = Token.token;
  const url = API.panel.packageCategories;
  const mobileOperatorId = store.state.panel.dataReCharge.operator;

  return axiosUtil.get(url, {
    params: {
      mobileOperatorId: store.state.panel.internetPackageType.operator,
    },
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function packages(): Promise<AxiosResponse> {
  const token = Token.token;
  const url = API.panel.packages;
  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export const panelService = {
  reCharge,
  billPayment,
  billInfo,
  packageCategories,
  packages,
};
