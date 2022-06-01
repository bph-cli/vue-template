import Mock from "mockjs";
import { param2Obj } from "@/utils";

const list = [];
const count = 100;

for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: "@increment",
      modelNo: /^3D\d{7}$/,
      "name|1": [
        "包",
        "风衣",
        "大衣",
        "连衣裙",
        "针织衫",
        "围巾",
        "帽子",
        "袜子",
        "T恤",
        "卫衣",
      ],
      "color|1": ["灰色", "白色", "红色", "紫色"],
      theLong: 0,
      mergeNo: /^3D\d{7}$/,
      "salesType|1": [
        "搭配配饰",
        "道具",
        "化妆品",
        "连身衣",
        "内搭",
        "配饰",
        "外套",
        "下装",
        "用品",
      ],
      "storyType|1": [
        "ET",
        "JA",
        "MM",
        "MM男装",
        "MM童装",
        "NVV",
        "PM",
        "SM",
        "ST",
        "VAAWOW",
        "道具",
        "科蒂斯",
        "美诗欧",
        "诗凡黎",
        "伊芙丽",
      ],
      time: Mock.Random.date(),
      sales: Mock.Random.natural(1000, 10000),
      reGoodsNo: Mock.Random.natural(1, 800),
      physicalNum: Mock.Random.natural(1000, 10000),
      takeupNum: Mock.Random.natural(100, 1000),
      usableNum: Mock.Random.natural(1000, 10000),
      mergeUsableNum: Mock.Random.natural(10, 100),
      mergeSales: Mock.Random.natural(1000, 10000),
      mergeSales7: Mock.Random.natural(1000, 10000),
      reGapNum: Mock.Random.natural(10, 100),
      mergeRegapNum: Mock.Random.natural(10, 100),
      image: "@image",
      region: "@region",
      storeNo: /^[A-Z]\d{3}$/,
      city: "@city",
    })
  );
}

export default {
  getGoodsList: (config) => {
    const { id, name, page = 1, pageSize = 10 } = param2Obj(config.url);
    const mockList = list.filter((item) => {
      if (name && item.name.indexOf(name) === -1) return false;
      return true;
    });

    const pageList = mockList.filter(
      (item, index) => index < pageSize * page && index >= pageSize * (page - 1)
    );
    return {
      code: 0,
      data: {
        total: mockList.length,
        list: pageList,
      },
    };
  },
};
