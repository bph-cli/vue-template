import Mock from "mockjs";
import loginAPI from "./login";
import goodsApi from "./goods";

Mock.setup({
  timeout: "300-600",
});

//登录相关
Mock.mock(/\/user\/login/, "post", loginAPI.loginByUsername);
Mock.mock(/\/user\/logout/, "post", loginAPI.logout);
Mock.mock(/\/user\/info\.*/, "get", loginAPI.getUserInfo);

//商品
Mock.mock(/\/goods\/list/, "get", goodsApi.getGoodsList);

export default Mock;
