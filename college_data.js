// 学院维度数据（含录取分数、复试线、招生人数、复试科目）
const COLLEGE_DATA = {
  "三峡大学": {
    "colleges": [
      {
        "name": "计算机与信息学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 281.0,
            "max": 281,
            "min": 281,
            "score_line": 264,
            "planned": 18,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "837.0",
            "retake_content": "面试：数字信号处理\n参考书目：官网未提供参考书目；笔试：数字信号处理\n参考书目：官网未提供参考书目"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 331.0,
            "max": 409,
            "min": 274,
            "score_line": 264,
            "planned": 39,
            "actual": 39,
            "retake_count": 45,
            "ratio": 1.1,
            "note": null,
            "retake_code": "837.0",
            "retake_content": "面试：数字信号处理\n参考书目：官网未提供参考书目；笔试：数字信号处理\n参考书目：官网未提供参考书目"
          }
        ]
      }
    ],
    "summary": {
      "avg": 306.0,
      "max": 409,
      "min": 274,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 57,
      "actual_total": 40,
      "retake_people_total": 46
    },
    "retake_subjects": "面试：数字信号处理\n参考书目：官网未提供参考书目；笔试：数字信号处理\n参考书目：官网未提供参考书目"
  },
  "上海交通大学": {
    "colleges": [
      {
        "name": "感知科学与工程学院",
        "majors": [
          {
            "name": "085400（专）智能感知工程-09方向（感知学院）",
            "avg": 354.3,
            "max": 399,
            "min": 337,
            "score_line": 337,
            "planned": 32,
            "actual": 10,
            "retake_count": 10,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "复试总分200分，官方公示口径中低于120分不予录取。"
          },
          {
            "name": "085400（专）智能感知工程-12方向（中电科联培）",
            "avg": 362.5,
            "max": 384,
            "min": 341,
            "score_line": 337,
            "planned": 18,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "复试总分200分，官方公示口径中低于120分不予录取。"
          }
        ]
      },
      {
        "name": "集成电路学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 364.0,
            "max": 400,
            "min": 339,
            "score_line": 337,
            "planned": 9,
            "actual": null,
            "retake_count": 12,
            "ratio": 1.3,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 393.5,
            "max": 415,
            "min": 374,
            "score_line": 364,
            "planned": 4,
            "actual": 4,
            "retake_count": 5,
            "ratio": 1.2,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。"
          },
          {
            "name": "081000（学）信息与通信工程（强军计划）",
            "avg": 311.8,
            "max": 356,
            "min": 256,
            "score_line": 255,
            "planned": null,
            "actual": 11,
            "retake_count": 11,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。"
          },
          {
            "name": "085400（专）电子与通信工程-02方向（本部）",
            "avg": 379.2,
            "max": 424,
            "min": 350,
            "score_line": 350,
            "planned": 83,
            "actual": null,
            "retake_count": 170,
            "ratio": 1.2,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。"
          },
          {
            "name": "085400（专）电子与通信工程-03方向（中电科联培）",
            "avg": 413.0,
            "max": 423,
            "min": 403,
            "score_line": 350,
            "planned": 6,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。"
          },
          {
            "name": "085400（专）电子与通信工程-04方向（四川研究院）",
            "avg": 400.5,
            "max": 417,
            "min": 384,
            "score_line": 350,
            "planned": 6,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。"
          },
          {
            "name": "085400（专）电子与通信工程-05方向（苏州智研院）",
            "avg": 381.0,
            "max": 381,
            "min": 381,
            "score_line": 350,
            "planned": 2,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。"
          },
          {
            "name": "085400（专）电子与通信工程-06方向（卫星工程）",
            "avg": 369.7,
            "max": 372,
            "min": 367,
            "score_line": 350,
            "planned": 6,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 372.9,
      "max": 424,
      "min": 256,
      "min_line": 255,
      "max_line": 364,
      "planned_total": 166,
      "actual_total": 35,
      "retake_people_total": 218
    },
    "retake_subjects": "专业测试（笔试）100分 + 综合面试100分，复试总分低于120分不予录取。；复试总分200分，官方公示口径中低于120分不予录取。"
  },
  "东北大学": {
    "colleges": [
      {
        "name": "计算机科学与工程学院",
        "majors": [
          {
            "name": "081000 （学）信息与通信工程【秦皇岛】信息与通信工程",
            "avg": 356.0,
            "max": 356,
            "min": 351,
            "score_line": 331,
            "planned": 14,
            "actual": 14,
            "retake_count": 19,
            "ratio": 1.4,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "参考书目：\n[1]《C程序设计》（第五版）谭浩强主编，清华大学出版社\n[2]《计算机网络》（第七版）谢希仁编著，电子工业出版社\n[3]《数字信号处理导论》（第二版）胡广书编著，清华大学出版社"
          },
          {
            "name": "081000 （学）信息与通信工程【其他研究方向】",
            "avg": 363.0,
            "max": 419,
            "min": 340,
            "score_line": 331,
            "planned": 14,
            "actual": 14,
            "retake_count": 19,
            "ratio": 1.0,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "参考书目：\n[1]《C程序设计》（第五版）谭浩强主编，清华大学出版社\n[2]《计算机网络》（第七版）谢希仁编著，电子工业出版社\n[3]《数字信号处理导论》（第二版）胡广书编著，清华大学出版社"
          },
          {
            "name": "085402 （专）通信工程【其他研究方向】",
            "avg": 375.0,
            "max": 435,
            "min": 367,
            "score_line": 367,
            "planned": 20,
            "actual": 20,
            "retake_count": 27,
            "ratio": 1.4,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "参考书目：\n[1]《C程序设计》（第五版）谭浩强主编，清华大学出版社\n[2]《计算机网络》（第七版）谢希仁编著，电子工业出版社\n[3]《数字信号处理导论》（第二版）胡广书编著，清华大学出版社"
          },
          {
            "name": "085402 （专）通信工程【秦皇岛】通信工程",
            "avg": 395.0,
            "max": 443,
            "min": 369,
            "score_line": 367,
            "planned": 20,
            "actual": 20,
            "retake_count": 27,
            "ratio": 1.4,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "参考书目：\n[1]《C程序设计》（第五版）谭浩强主编，清华大学出版社\n[2]《计算机网络》（第七版）谢希仁编著，电子工业出版社\n[3]《数字信号处理导论》（第二版）胡广书编著，清华大学出版社"
          },
          {
            "name": "085402 （专）通信工程【佛山】通信工程",
            "avg": 396.0,
            "max": 443,
            "min": 367,
            "score_line": 367,
            "planned": 20,
            "actual": 20,
            "retake_count": 27,
            "ratio": 1.4,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "参考书目：\n[1]《C程序设计》（第五版）谭浩强主编，清华大学出版社\n[2]《计算机网络》（第七版）谢希仁编著，电子工业出版社\n[3]《数字信号处理导论》（第二版）胡广书编著，清华大学出版社"
          }
        ]
      }
    ],
    "summary": {
      "avg": 377.0,
      "max": 443,
      "min": 340,
      "min_line": 331,
      "max_line": 367,
      "planned_total": 88,
      "actual_total": 88,
      "retake_people_total": 119
    },
    "retake_subjects": "参考书目：\n[1]《C程序设计》（第五版）谭浩强主编，清华大学出版社\n[2]《计算机网络》（第七版）谢希仁编著，电子工业出版社\n[3]《数字信号处理导论》（第二版）胡广书编著，清华大学出版社"
  },
  "东北林业大学": {
    "colleges": [
      {
        "name": "012计算机与控制工程学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术(含量子技术等)",
            "avg": 361.0,
            "max": 421,
            "min": 317,
            "score_line": 317,
            "planned": 22,
            "actual": 22,
            "retake_count": 28,
            "ratio": 1.3,
            "note": null,
            "retake_code": "829.0",
            "retake_content": "数字信号处理和嵌入式技术"
          }
        ]
      }
    ],
    "summary": {
      "avg": 361.0,
      "max": 421,
      "min": 317,
      "min_line": 317,
      "max_line": 317,
      "planned_total": 22,
      "actual_total": 22,
      "retake_people_total": 28
    },
    "retake_subjects": "数字信号处理和嵌入式技术"
  },
  "东北电力大学": {
    "colleges": [
      {
        "name": "电气工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 321.0,
            "max": 360,
            "min": 286,
            "score_line": 286,
            "planned": 16,
            "actual": 9,
            "retake_count": 9,
            "ratio": 1.0,
            "note": null,
            "retake_code": "832.0",
            "retake_content": "笔试：通信原理\n参考教材：《通信原理》第7版.樊昌信.国防工业出版社.2012."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 349.0,
            "max": 411,
            "min": 285,
            "score_line": 285,
            "planned": 30,
            "actual": 19,
            "retake_count": 19,
            "ratio": 1.0,
            "note": null,
            "retake_code": "832.0",
            "retake_content": "笔试：通信原理\n参考教材：《通信原理》第7版.樊昌信.国防工业出版社.2012."
          }
        ]
      }
    ],
    "summary": {
      "avg": 335.0,
      "max": 411,
      "min": 285,
      "min_line": 285,
      "max_line": 286,
      "planned_total": 46,
      "actual_total": 28,
      "retake_people_total": 28
    },
    "retake_subjects": "笔试：通信原理\n参考教材：《通信原理》第7版.樊昌信.国防工业出版社.2012."
  },
  "东北石油大学": {
    "colleges": [
      {
        "name": "物理与电子工程学院",
        "majors": [
          {
            "name": "085407（专）仪器仪表工程",
            "avg": 341.0,
            "max": 432,
            "min": 270,
            "score_line": 270,
            "planned": 30,
            "actual": 13,
            "retake_count": 14,
            "ratio": 1.1,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "采用线上远程面试方式进行,复试科目：电子与信息综合"
          }
        ]
      },
      {
        "name": "电气信息工程学院",
        "majors": [
          {
            "name": "085402（专）通信工程",
            "avg": 319.5,
            "max": 368,
            "min": 270,
            "score_line": 270,
            "planned": 15,
            "actual": 16,
            "retake_count": 16,
            "ratio": 1.0,
            "note": null,
            "retake_code": "818.0",
            "retake_content": "采用线上远程面试方式进行,复试科目：电子与信息综合"
          }
        ]
      }
    ],
    "summary": {
      "avg": 330.2,
      "max": 432,
      "min": 270,
      "min_line": 270,
      "max_line": 270,
      "planned_total": 45,
      "actual_total": 29,
      "retake_people_total": 30
    },
    "retake_subjects": "采用线上远程面试方式进行,复试科目：电子与信息综合"
  },
  "东南大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "080902（学）电路与系统",
            "avg": 363.0,
            "max": 378,
            "min": 350,
            "score_line": 316,
            "planned": 5,
            "actual": 3,
            "retake_count": 4,
            "ratio": 1.3,
            "note": null,
            "retake_code": "820.0",
            "retake_content": "526专业综合或529模拟电子线路，按方向执行"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 389.0,
            "max": 419,
            "min": 348,
            "score_line": 245,
            "planned": 33,
            "actual": 30,
            "retake_count": 36,
            "ratio": 1.2,
            "note": null,
            "retake_code": "820.0",
            "retake_content": "526专业综合或529模拟电子线路，按方向执行"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 401.0,
            "max": 437,
            "min": 357,
            "score_line": 357,
            "planned": 116,
            "actual": 116,
            "retake_count": 147,
            "ratio": 1.3,
            "note": null,
            "retake_code": "820.0",
            "retake_content": "526专业综合或529模拟电子线路，按方向执行"
          }
        ]
      }
    ],
    "summary": {
      "avg": 384.3,
      "max": 437,
      "min": 348,
      "min_line": 245,
      "max_line": 357,
      "planned_total": 154,
      "actual_total": 149,
      "retake_people_total": 187
    },
    "retake_subjects": "526专业综合或529模拟电子线路，按方向执行"
  },
  "中国地质大学（北京）": {
    "colleges": [
      {
        "name": "地球物理与信息技术学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 368.0,
            "max": 416,
            "min": 328,
            "score_line": 325,
            "planned": 23,
            "actual": 38,
            "retake_count": 51,
            "ratio": 1.3,
            "note": null,
            "retake_code": "845.0",
            "retake_content": "笔试：单片机原理\n参考教材：《单片机中级教程（第二版）》张俊谟.北京航空航天大学出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 368.0,
      "max": 416,
      "min": 328,
      "min_line": 325,
      "max_line": 325,
      "planned_total": 23,
      "actual_total": 38,
      "retake_people_total": 51
    },
    "retake_subjects": "笔试：单片机原理\n参考教材：《单片机中级教程（第二版）》张俊谟.北京航空航天大学出版社."
  },
  "中国地质大学（武汉）": {
    "colleges": [
      {
        "name": "机械与电子信息学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 330.0,
            "max": 402,
            "min": 268,
            "score_line": 268,
            "planned": 8,
            "actual": 8,
            "retake_count": 9,
            "ratio": 1.1,
            "note": null,
            "retake_code": "894.0",
            "retake_content": "电类综合（数电、C语言和英语） MI0 机电面试"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 396.0,
            "max": 438,
            "min": 353,
            "score_line": 353,
            "planned": 47,
            "actual": 47,
            "retake_count": 75,
            "ratio": 1.6,
            "note": null,
            "retake_code": "894.0",
            "retake_content": "电类综合（数电、C语言和英语） MI0 机电面试"
          },
          {
            "name": "085400（专）电子信息(05)卓越工程师联培专项",
            "avg": 381.0,
            "max": 423,
            "min": 344,
            "score_line": 341,
            "planned": 50,
            "actual": 50,
            "retake_count": 78,
            "ratio": 1.6,
            "note": null,
            "retake_code": "894.0",
            "retake_content": "电类综合（数电、C语言和英语） MI0 机电面试"
          }
        ]
      }
    ],
    "summary": {
      "avg": 369.0,
      "max": 438,
      "min": 268,
      "min_line": 268,
      "max_line": 353,
      "planned_total": 105,
      "actual_total": 105,
      "retake_people_total": 162
    },
    "retake_subjects": "电类综合（数电、C语言和英语） MI0 机电面试"
  },
  "中国民航大学": {
    "colleges": [
      {
        "name": "电子信息与自动化学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 342.0,
            "max": 344,
            "min": 341,
            "score_line": 270,
            "planned": 48,
            "actual": 2,
            "retake_count": 4,
            "ratio": 2.0,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "复试科目为信号与系统、数字信号处理、通信原理，三门选两门，原则上不得与初试科目相同。"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 348.5,
            "max": 411,
            "min": 292,
            "score_line": 270,
            "planned": 48,
            "actual": 50,
            "retake_count": 90,
            "ratio": 1.8,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "复试科目为信号与系统、数字信号处理、通信原理，三门选两门，原则上不得与初试科目相同。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 345.2,
      "max": 411,
      "min": 292,
      "min_line": 270,
      "max_line": 270,
      "planned_total": 96,
      "actual_total": 52,
      "retake_people_total": 94
    },
    "retake_subjects": "复试科目为信号与系统、数字信号处理、通信原理，三门选两门，原则上不得与初试科目相同。"
  },
  "中国海洋大学": {
    "colleges": [
      {
        "name": "信息科学与工程学部",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 364.0,
            "max": 405,
            "min": 341,
            "score_line": 306,
            "planned": 8,
            "actual": 8,
            "retake_count": 16,
            "ratio": 2.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "F0218电子信息综合：C语言程序设计（55%）+数字电子技术基础（45%）\n参考书目：官网未给出具体的参考书目"
          },
          {
            "name": "085401（专）新一代电子信息技术-01方向",
            "avg": 385.6,
            "max": 427,
            "min": 340,
            "score_line": 333,
            "planned": 25,
            "actual": 27,
            "retake_count": 36,
            "ratio": 1.3,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "F0218电子信息综合：C语言程序设计（55%）+数字电子技术基础（45%）\n参考书目：官网未给出具体的参考书目"
          },
          {
            "name": "085401（专）新一代电子信息技术-02方向",
            "avg": 301.0,
            "max": 324,
            "min": 273,
            "score_line": 264,
            "planned": 5,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "F0218电子信息综合：C语言程序设计（55%）+数字电子技术基础（45%）\n参考书目：官网未给出具体的参考书目"
          },
          {
            "name": "085401（专）新一代电子信息技术-03方向",
            "avg": 329.8,
            "max": 423,
            "min": 267,
            "score_line": 264,
            "planned": 53,
            "actual": 44,
            "retake_count": 45,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "F0218电子信息综合：C语言程序设计（55%）+数字电子技术基础（45%）\n参考书目：官网未给出具体的参考书目"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 383.2,
            "max": 436,
            "min": 354,
            "score_line": 354,
            "planned": 39,
            "actual": 40,
            "retake_count": 53,
            "ratio": 1.3,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "F0218电子信息综合：C语言程序设计（55%）+数字电子技术基础（45%）\n参考书目：官网未给出具体的参考书目"
          }
        ]
      },
      {
        "name": "卓越工程师学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 336.0,
            "max": 336,
            "min": 336,
            "score_line": 264,
            "planned": 3,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "F0218电子信息综合：C语言程序设计（55%）+数字电子技术基础（45%）\n参考书目：官网未给出具体的参考书目"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 281.0,
            "max": 294,
            "min": 268,
            "score_line": 264,
            "planned": 3,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "819.0",
            "retake_content": "F0218电子信息综合：C语言程序设计（55%）+数字电子技术基础（45%）\n参考书目：官网未给出具体的参考书目"
          }
        ]
      }
    ],
    "summary": {
      "avg": 340.1,
      "max": 436,
      "min": 267,
      "min_line": 264,
      "max_line": 354,
      "planned_total": 136,
      "actual_total": 125,
      "retake_people_total": 156
    },
    "retake_subjects": "F0218电子信息综合：C语言程序设计（55%）+数字电子技术基础（45%）\n参考书目：官网未给出具体的参考书目"
  },
  "中国石油大学（北京）": {
    "colleges": [
      {
        "name": "人工智能学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 316.0,
            "max": 352,
            "min": 281,
            "score_line": 264,
            "planned": 6,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "853.0",
            "retake_content": "专业面试 + 外语面试"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 348.0,
            "max": 413,
            "min": 279,
            "score_line": 264,
            "planned": 10,
            "actual": 10,
            "retake_count": 12,
            "ratio": 1.2,
            "note": null,
            "retake_code": "853.0",
            "retake_content": "专业面试 + 外语面试"
          }
        ]
      }
    ],
    "summary": {
      "avg": 332.0,
      "max": 413,
      "min": 279,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 16,
      "actual_total": 16,
      "retake_people_total": 18
    },
    "retake_subjects": "专业面试 + 外语面试"
  },
  "中国矿业大学（华东）": {
    "colleges": [
      {
        "name": "信息与控制工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 319.0,
            "max": 358,
            "min": 280,
            "score_line": 275,
            "planned": 35,
            "actual": 35,
            "retake_count": 53,
            "ratio": 1.5,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "594 专业综合（数字信号处理）"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 365.0,
            "max": 414,
            "min": 338,
            "score_line": 334,
            "planned": 33,
            "actual": 33,
            "retake_count": 51,
            "ratio": 1.5,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "594 专业综合（数字信号处理）"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 361.0,
            "max": 400,
            "min": 334,
            "score_line": 328,
            "planned": 32,
            "actual": 33,
            "retake_count": 50,
            "ratio": 1.5,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "594 专业综合（数字信号处理）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 348.3,
      "max": 414,
      "min": 280,
      "min_line": 275,
      "max_line": 334,
      "planned_total": 100,
      "actual_total": 101,
      "retake_people_total": 154
    },
    "retake_subjects": "594 专业综合（数字信号处理）"
  },
  "中国科学技术大学": {
    "colleges": [
      {
        "name": "信息科学技术学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 364.3,
            "max": 381,
            "min": 344,
            "score_line": 330,
            "planned": 5,
            "actual": 4,
            "retake_count": 5,
            "ratio": 1.2,
            "note": null,
            "retake_code": "843.0",
            "retake_content": "机考（C语言编程）+面试\n参考教材：\n1.《程序设计与计算思维(基于C语言)》.王雷等.电子工业出版社.2022.\n2.《计算机程序设计学习实践:实验指导书》.王雷等.中国科学技术大学出版社.2022"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 378.6,
            "max": 420,
            "min": 350,
            "score_line": 350,
            "planned": 16,
            "actual": 69,
            "retake_count": 85,
            "ratio": 1.2,
            "note": null,
            "retake_code": "843.0",
            "retake_content": "机考（C语言编程）+面试\n参考教材：\n1.《程序设计与计算思维(基于C语言)》.王雷等.电子工业出版社.2022.\n2.《计算机程序设计学习实践:实验指导书》.王雷等.中国科学技术大学出版社.2022"
          }
        ]
      },
      {
        "name": "先进技术研究院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 376.5,
            "max": 412,
            "min": 342,
            "score_line": 338,
            "planned": 60,
            "actual": 61,
            "retake_count": 86,
            "ratio": 1.4,
            "note": null,
            "retake_code": "843.0",
            "retake_content": "机考（C语言编程）+面试\n参考教材：\n1.《程序设计与计算思维(基于C语言)》.王雷等.电子工业出版社.2022.\n2.《计算机程序设计学习实践:实验指导书》.王雷等.中国科学技术大学出版社.2022"
          }
        ]
      },
      {
        "name": "生命科学与医学部-生物医学工程学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 352.0,
            "max": 405,
            "min": 310,
            "score_line": 310,
            "planned": 7,
            "actual": 64,
            "retake_count": 71,
            "ratio": 1.1,
            "note": "该学院复试名单未标注具体方向，以下为总方向数据",
            "retake_code": "843.0",
            "retake_content": "面试"
          }
        ]
      },
      {
        "name": "生物医学工程学院（苏州医工所）",
        "majors": [
          {
            "name": "083100（学）生物医学工程",
            "avg": 352.0,
            "max": 405,
            "min": 310,
            "score_line": 310,
            "planned": 4,
            "actual": 73,
            "retake_count": 91,
            "ratio": 1.2,
            "note": "该学院复试名单未标注具体方向，以下为总方向数据",
            "retake_code": "843.0",
            "retake_content": "面试"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 352.0,
            "max": 405,
            "min": 310,
            "score_line": 325,
            "planned": 13,
            "actual": 73,
            "retake_count": 91,
            "ratio": 1.2,
            "note": "该学院复试名单未标注具体方向，以下为总方向数据",
            "retake_code": "843.0",
            "retake_content": "面试"
          }
        ]
      }
    ],
    "summary": {
      "avg": 362.6,
      "max": 420,
      "min": 310,
      "min_line": 310,
      "max_line": 350,
      "planned_total": 105,
      "actual_total": 344,
      "retake_people_total": 429
    },
    "retake_subjects": "机考（C语言编程）+面试\n参考教材：\n1.《程序设计与计算思维(基于C语言)》.王雷等.电子工业出版社.2022.\n2.《计算机程序设计学习实践:实验指导书》.王雷等.中国科学技术大学出版社.2022；面试"
  },
  "中国科学院大学": {
    "colleges": [
      {
        "name": "声学研究所东海研究站",
        "majors": [
          {
            "name": "081002（学）信号与信息处理",
            "avg": 383.0,
            "max": 413,
            "min": 339,
            "score_line": 264,
            "planned": 2,
            "actual": 5,
            "retake_count": 8,
            "ratio": 1.6,
            "note": null,
            "retake_code": "859.0",
            "retake_content": "综合能力考核 + 英语测试"
          }
        ]
      },
      {
        "name": "电子电气与通信工程学院",
        "majors": [
          {
            "name": "859（学）电子学院859通信方向（081001/081002/085402合并）",
            "avg": 342.0,
            "max": 401,
            "min": 293,
            "score_line": 264,
            "planned": 3,
            "actual": 7,
            "retake_count": 11,
            "ratio": 1.6,
            "note": null,
            "retake_code": "859.0",
            "retake_content": "综合考核（业务能力测试+外语能力测试+综合素质考核）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 362.5,
      "max": 413,
      "min": 293,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 5,
      "actual_total": 12,
      "retake_people_total": 19
    },
    "retake_subjects": "综合考核（业务能力测试+外语能力测试+综合素质考核）；综合能力考核 + 英语测试"
  },
  "中山大学": {
    "colleges": [
      {
        "name": "柔性电子学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术（含量子技术等）",
            "avg": 336.0,
            "max": 355,
            "min": 317,
            "score_line": 300,
            "planned": 4,
            "actual": 2,
            "retake_count": 4,
            "ratio": 2.0,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7585002 电路与信号综合\n参考书目：官网未给出具体的复试参考书目"
          }
        ]
      },
      {
        "name": "海洋工程与技术学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 384.5,
            "max": 415,
            "min": 337,
            "score_line": 330,
            "planned": 27,
            "actual": 20,
            "retake_count": 38,
            "ratio": 1.9,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "复试科目:7675004 数字信号处理\n参考书目：官网未给出具体的复试参考书目"
          }
        ]
      },
      {
        "name": "生物医学工程学院",
        "majors": [
          {
            "name": "085409（专）生物医学工程",
            "avg": 362.4,
            "max": 423,
            "min": 321,
            "score_line": 300,
            "planned": 32,
            "actual": 5,
            "retake_count": 8,
            "ratio": 1.6,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7695001 电路原理、数字电路与模拟电路综合\n7695006 生物医学电子与传感器\n7695005 数据结构与算法设计\n7695004 细胞生物学\n7695002 高分子化学与物理\n参考书目：官网未给出具体的复试参考书目"
          },
          {
            "name": "083100（学）生物医学工程",
            "avg": 353.8,
            "max": 414,
            "min": 312,
            "score_line": 280,
            "planned": 6,
            "actual": 4,
            "retake_count": 6,
            "ratio": 1.5,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7695001 电路原理、数字电路与模拟电路综合\n7695006 生物医学电子与传感器\n7695005 数据结构与算法设计\n7695004 细胞生物学\n7695002 高分子化学与物理\n参考书目：官网未给出具体的复试参考书目"
          }
        ]
      },
      {
        "name": "电子与信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 366.4,
            "max": 437,
            "min": 303,
            "score_line": 300,
            "planned": 18,
            "actual": 10,
            "retake_count": 15,
            "ratio": 1.5,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7625003 电子工程基础综合\n参考书目：官网未给出具体的复试参考书目"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 404.4,
            "max": 439,
            "min": 382,
            "score_line": 380,
            "planned": 22,
            "actual": 18,
            "retake_count": 25,
            "ratio": 1.4,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7625003 电子工程基础综合\n参考书目：官网未给出具体的复试参考书目"
          }
        ]
      },
      {
        "name": "电子与通信工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 375.0,
            "max": 412,
            "min": 327,
            "score_line": 325,
            "planned": 53,
            "actual": 20,
            "retake_count": 24,
            "ratio": 1.2,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7655001 电路与信号综合\n参考书目：官网未给出具体的复试参考书目"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 407.2,
            "max": 437,
            "min": 382,
            "score_line": 382,
            "planned": 80,
            "actual": 55,
            "retake_count": 64,
            "ratio": 1.2,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7655001 电路与信号综合\n参考书目：官网未给出具体的复试参考书目"
          }
        ]
      },
      {
        "name": "系统科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 347.0,
            "max": 360,
            "min": 329,
            "score_line": 280,
            "planned": 7,
            "actual": 4,
            "retake_count": 6,
            "ratio": 1.5,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7715002 电子工程基础综合\n参考书目：官网未给出具体的复试参考书目；7715003 离散数学与C程序设计\n参考书目：官网未给出具体的复试参考书目"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 376.0,
            "max": 416,
            "min": 346,
            "score_line": 335,
            "planned": 8,
            "actual": 7,
            "retake_count": 11,
            "ratio": 1.6,
            "note": null,
            "retake_code": "884.0",
            "retake_content": "7715002 电子工程基础综合\n参考书目：官网未给出具体的复试参考书目；7715003 离散数学与C程序设计\n参考书目：官网未给出具体的复试参考书目"
          }
        ]
      }
    ],
    "summary": {
      "avg": 371.3,
      "max": 439,
      "min": 303,
      "min_line": 280,
      "max_line": 382,
      "planned_total": 257,
      "actual_total": 145,
      "retake_people_total": 201
    },
    "retake_subjects": "7625003 电子工程基础综合\n参考书目：官网未给出具体的复试参考书目；7655001 电路与信号综合\n参考书目：官网未给出具体的复试参考书目；7715002 电子工程基础综合\n参考书目：官网未给出具体的复试参考书目；7715003 离散数学与C程序设计\n参考书目：官网未给出具体的复试参考书目；7585002 电路与信号综合\n参考书目：官网未给出具体的复试参考书目；7695001 电路原理、数字电路与模拟电路综合\n7695006 生物医学电子与传感器\n7695005 数据结构与算法设计\n7695004 细胞生物学\n7695002 高分子化学与物理\n参考书目：官网未给出具体的复试参考书目；复试科目:7675004 数字信号处理\n参考书目：官网未给出具体的复试参考书目"
  },
  "内蒙古科技大学": {
    "colleges": [
      {
        "name": "数智产业学院（网络安全学院）",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 282.0,
            "max": 282,
            "min": 282,
            "score_line": 254,
            "planned": 11,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "科目：F919 数字信号处理 / F920 通信原理              \n参考教材：《数字信号处理》第 3 版.高等教育出版社.2018 年\n《通信原理（第 7 版）》樊昌信等主编.国防工业出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 303.0,
            "max": 389,
            "min": 270,
            "score_line": 254,
            "planned": 20,
            "actual": 29,
            "retake_count": 29,
            "ratio": 1.0,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "科目：F919 数字信号处理 / F920 通信原理              \n参考教材：《数字信号处理》第 3 版.高等教育出版社.2018 年\n《通信原理（第 7 版）》樊昌信等主编.国防工业出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 309.0,
            "max": 376,
            "min": 257,
            "score_line": 254,
            "planned": 7,
            "actual": 13,
            "retake_count": 13,
            "ratio": 1.0,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "科目：F919 数字信号处理 / F920 通信原理              \n参考教材：《数字信号处理》第 3 版.高等教育出版社.2018 年\n《通信原理（第 7 版）》樊昌信等主编.国防工业出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 298.0,
      "max": 389,
      "min": 257,
      "min_line": 254,
      "max_line": 254,
      "planned_total": 38,
      "actual_total": 43,
      "retake_people_total": 43
    },
    "retake_subjects": "科目：F919 数字信号处理 / F920 通信原理              \n参考教材：《数字信号处理》第 3 版.高等教育出版社.2018 年\n《通信原理（第 7 版）》樊昌信等主编.国防工业出版社."
  },
  "北京信息科技大学": {
    "colleges": [
      {
        "name": "仪器科学与光电工程学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术-01方向",
            "avg": 313.7,
            "max": 396,
            "min": 264,
            "score_line": 264,
            "planned": 159,
            "actual": 123,
            "retake_count": 124,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "任选一门，复试科目不能与初试科目相同：\n1.电路基础\n2.信号分析与处理\n3.工程光学\n4.软件技术基础"
          },
          {
            "name": "080400（学）仪器科学与技术",
            "avg": 290.3,
            "max": 303,
            "min": 283,
            "score_line": 264,
            "planned": 40,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "任选一门，复试科目不能与初试科目相同：\n1.电路基础\n2.信号分析与处理\n3.工程光学\n4.软件技术基础"
          }
        ]
      },
      {
        "name": "信息与通信工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 305.6,
            "max": 380,
            "min": 266,
            "score_line": 264,
            "planned": 21,
            "actual": 18,
            "retake_count": 18,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "信息与通信工程综合基础：通信原理40%，数字信号处理30%，C语言程序设计30%"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 305.1,
            "max": 372,
            "min": 264,
            "score_line": 264,
            "planned": 45,
            "actual": 32,
            "retake_count": 32,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "信息与通信工程综合基础：通信原理40%，数字信号处理30%，C语言程序设计30%"
          },
          {
            "name": "085410（专）人工智能",
            "avg": 298.4,
            "max": 351,
            "min": 280,
            "score_line": 264,
            "planned": 22,
            "actual": 5,
            "retake_count": 5,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "信息与通信工程综合基础：通信原理40%，数字信号处理30%，C语言程序设计30%"
          },
          {
            "name": "085401（专）新一代电子信息技术-02,03方向",
            "avg": 321.0,
            "max": 343,
            "min": 283,
            "score_line": 264,
            "planned": 9,
            "actual": 4,
            "retake_count": 4,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "信息与通信工程综合基础：通信原理40%，数字信号处理30%，C语言程序设计30%"
          }
        ]
      }
    ],
    "summary": {
      "avg": 305.7,
      "max": 396,
      "min": 264,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 296,
      "actual_total": 185,
      "retake_people_total": 186
    },
    "retake_subjects": "信息与通信工程综合基础：通信原理40%，数字信号处理30%，C语言程序设计30%；任选一门，复试科目不能与初试科目相同：\n1.电路基础\n2.信号分析与处理\n3.工程光学\n4.软件技术基础"
  },
  "北京化工大学": {
    "colleges": [
      {
        "name": "信息科学与技术学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 317.2,
            "max": 355,
            "min": 275,
            "score_line": 275,
            "planned": 10,
            "actual": 10,
            "retake_count": 13,
            "ratio": 1.3,
            "note": null,
            "retake_code": "843.0",
            "retake_content": "402综合二(数字信号处理与通信原理)\n参考书目：\n1.《数字信号处理》第3版.程佩青.北京：清华大学出版社.2007.\n2.《通信原理》樊昌信.北京：国防工业出版社.2001."
          },
          {
            "name": "085401（专）新一代电子信息技术（含量子技术等）",
            "avg": 355.1,
            "max": 406,
            "min": 318,
            "score_line": 318,
            "planned": 15,
            "actual": 15,
            "retake_count": 20,
            "ratio": 1.3,
            "note": null,
            "retake_code": "843.0",
            "retake_content": "402综合二(数字信号处理与通信原理)\n参考书目：\n1.《数字信号处理》第3版.程佩青.北京：清华大学出版社.2007.\n2.《通信原理》樊昌信.北京：国防工业出版社.2001."
          }
        ]
      }
    ],
    "summary": {
      "avg": 336.1,
      "max": 406,
      "min": 275,
      "min_line": 275,
      "max_line": 318,
      "planned_total": 25,
      "actual_total": 25,
      "retake_people_total": 33
    },
    "retake_subjects": "402综合二(数字信号处理与通信原理)\n参考书目：\n1.《数字信号处理》第3版.程佩青.北京：清华大学出版社.2007.\n2.《通信原理》樊昌信.北京：国防工业出版社.2001."
  },
  "北京工业大学": {
    "colleges": [
      {
        "name": "信息科学技术学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术（01方向）",
            "avg": 327.0,
            "max": 392,
            "min": 284,
            "score_line": 284,
            "planned": 9,
            "actual": 9,
            "retake_count": 13,
            "ratio": 1.4,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "笔试科目：计算机原理（含C语言）             参考教材：                                  1.《 8086/Pentium微机原理及接口技术》《8086微机原理及接口技术—习题解答与实验指导》\n2.C程序设计 (第三版）"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 357.0,
            "max": 389,
            "min": 324,
            "score_line": 324,
            "planned": 24,
            "actual": 24,
            "retake_count": 30,
            "ratio": 1.2,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "笔试科目：计算机原理（含C语言）             参考教材：                                  1.《 8086/Pentium微机原理及接口技术》《8086微机原理及接口技术—习题解答与实验指导》\n2.C程序设计 (第三版）"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 396.0,
            "max": 424,
            "min": 378,
            "score_line": 378,
            "planned": 45,
            "actual": 45,
            "retake_count": 67,
            "ratio": 1.5,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "笔试科目：计算机原理（含C语言）             参考教材：                                  1.《 8086/Pentium微机原理及接口技术》《8086微机原理及接口技术—习题解答与实验指导》\n2.C程序设计 (第三版）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 360.0,
      "max": 424,
      "min": 284,
      "min_line": 284,
      "max_line": 378,
      "planned_total": 78,
      "actual_total": 78,
      "retake_people_total": 110
    },
    "retake_subjects": "笔试科目：计算机原理（含C语言）             参考教材：                                  1.《 8086/Pentium微机原理及接口技术》《8086微机原理及接口技术—习题解答与实验指导》\n2.C程序设计 (第三版）"
  },
  "北京理工大学": {
    "colleges": [
      {
        "name": "信息与电子学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 372.0,
            "max": 429,
            "min": 323,
            "score_line": 313,
            "planned": 36,
            "actual": 49,
            "retake_count": 75,
            "ratio": 1.5,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识，综合能力考查。"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 383.5,
            "max": 433,
            "min": 356,
            "score_line": 356,
            "planned": null,
            "actual": 72,
            "retake_count": 103,
            "ratio": 1.4,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识，综合能力考查。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 361.1,
            "max": 402,
            "min": 307,
            "score_line": 300,
            "planned": 6,
            "actual": 14,
            "retake_count": 18,
            "ratio": 1.3,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识，综合能力考查。"
          }
        ]
      },
      {
        "name": "医学技术学院",
        "majors": [
          {
            "name": "083100（学）生物医学工程",
            "avg": 336.0,
            "max": 383,
            "min": 300,
            "score_line": 300,
            "planned": 9,
            "actual": 19,
            "retake_count": 19,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "笔试科目：生物医学工程相关科目综合(选择题、专业英语翻译)。\n面试内容：外语口语听力测试；综合能力以及视不同本科专业背景，在生物医学工程学科范围内进行有侧重的知识测试。"
          },
          {
            "name": "085409（专）生物医学工程",
            "avg": 387.4,
            "max": 418,
            "min": 348,
            "score_line": 348,
            "planned": 12,
            "actual": 29,
            "retake_count": 47,
            "ratio": 1.6,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "笔试科目：生物医学工程相关科目综合(选择题、专业英语翻译)。\n面试内容：外语口语听力测试；综合能力以及视不同本科专业背景，在生物医学工程学科范围内进行有侧重的知识测试。"
          }
        ]
      },
      {
        "name": "珠海校区",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 338.0,
            "max": 364,
            "min": 307,
            "score_line": 300,
            "planned": 6,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识,综合能力考查。；笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识,综合能力考查。\n备注：含Risc-V班4人。"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 364.3,
            "max": 406,
            "min": 327,
            "score_line": 300,
            "planned": 13,
            "actual": 36,
            "retake_count": 53,
            "ratio": 1.5,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识,综合能力考查。；笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识,综合能力考查。\n备注：含Risc-V班4人。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 362.8,
            "max": 391,
            "min": 324,
            "score_line": 300,
            "planned": 7,
            "actual": 14,
            "retake_count": 19,
            "ratio": 1.4,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识,综合能力考查。；笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识,综合能力考查。\n备注：含Risc-V班4人。"
          }
        ]
      },
      {
        "name": "集成电路与电子学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 365.9,
            "max": 436,
            "min": 327,
            "score_line": 300,
            "planned": 5,
            "actual": 18,
            "retake_count": 23,
            "ratio": 1.3,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "笔试科目：电磁场理论，信号与系统，数字电路（任选2门）。\n面试内容：外语口语听力测试；专业基础知识及综合能力。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 363.4,
      "max": 436,
      "min": 300,
      "min_line": 300,
      "max_line": 356,
      "planned_total": 94,
      "actual_total": 257,
      "retake_people_total": 363
    },
    "retake_subjects": "笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识，综合能力考查。；笔试科目：电磁场理论，信号与系统，数字电路（任选2门）。\n面试内容：外语口语听力测试；专业基础知识及综合能力。；笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识,综合能力考查。；笔试科目：电子线路（含数电与模电两科内容）。\n面试内容：外语口语听力测试；专业基础知识,综合能力考查。\n备注：含Risc-V班4人。；笔试科目：生物医学工程相关科目综合(选择题、专业英语翻译)。\n面试内容：外语口语听力测试；综合能力以及视不同本科专业背景，在生物医学工程学科范围内进行有侧重的知识测试。"
  },
  "北京电子科技学院": {
    "colleges": [
      {
        "name": "北京电子科技学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 345.0,
            "max": 392,
            "min": 320,
            "score_line": 317,
            "planned": 12,
            "actual": 12,
            "retake_count": 17,
            "ratio": 1.4,
            "note": null,
            "retake_code": "831.0",
            "retake_content": "0912数字电路\n参考教材：官网未给出。；0913通信原理\n参考教材：官网未给出。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 326.0,
            "max": 384,
            "min": 284,
            "score_line": 278,
            "planned": 13,
            "actual": 12,
            "retake_count": 14,
            "ratio": 1.2,
            "note": null,
            "retake_code": "831.0",
            "retake_content": "0912数字电路\n参考教材：官网未给出。；0913通信原理\n参考教材：官网未给出。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 335.5,
      "max": 392,
      "min": 284,
      "min_line": 278,
      "max_line": 317,
      "planned_total": 25,
      "actual_total": 24,
      "retake_people_total": 31
    },
    "retake_subjects": "0912数字电路\n参考教材：官网未给出。；0913通信原理\n参考教材：官网未给出。"
  },
  "北京航空航天大学": {
    "colleges": [
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 360.0,
            "max": 418,
            "min": 330,
            "score_line": 310,
            "planned": 21,
            "actual": 21,
            "retake_count": 45,
            "ratio": 2.1,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "见学院复试细则"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 379.0,
            "max": 417,
            "min": 332,
            "score_line": 332,
            "planned": 34,
            "actual": 34,
            "retake_count": 34,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "见学院复试细则"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 385.0,
            "max": 421,
            "min": 341,
            "score_line": 320,
            "planned": 92,
            "actual": 51,
            "retake_count": 77,
            "ratio": 1.5,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "见学院复试细则"
          }
        ]
      },
      {
        "name": "集成电路科学与工程学院",
        "majors": [
          {
            "name": "085403（专）集成电路工程",
            "avg": 358.0,
            "max": 421,
            "min": 314,
            "score_line": 312,
            "planned": 44,
            "actual": 44,
            "retake_count": 57,
            "ratio": 1.3,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "见学院复试细则"
          },
          {
            "name": "140100（学）集成电路科学与工程",
            "avg": 337.0,
            "max": 369,
            "min": 306,
            "score_line": 306,
            "planned": 21,
            "actual": 21,
            "retake_count": 21,
            "ratio": 1.0,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "见学院复试细则"
          }
        ]
      }
    ],
    "summary": {
      "avg": 363.8,
      "max": 421,
      "min": 306,
      "min_line": 306,
      "max_line": 332,
      "planned_total": 212,
      "actual_total": 171,
      "retake_people_total": 234
    },
    "retake_subjects": "见学院复试细则"
  },
  "北京邮电大学": {
    "colleges": [
      {
        "name": "电子工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 365.0,
            "max": 423,
            "min": 322,
            "score_line": 306,
            "planned": 70,
            "actual": 37,
            "retake_count": 45,
            "ratio": 1.2,
            "note": null,
            "retake_code": "804.0",
            "retake_content": "面试内容：专业素质和能力、外语能力、政治思想素质和道德品质。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 365.0,
      "max": 423,
      "min": 322,
      "min_line": 306,
      "max_line": 306,
      "planned_total": 70,
      "actual_total": 37,
      "retake_people_total": 45
    },
    "retake_subjects": "面试内容：专业素质和能力、外语能力、政治思想素质和道德品质。"
  },
  "北方工业大学": {
    "colleges": [
      {
        "name": "人工智能与计算机学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 305.0,
            "max": 305,
            "min": 305,
            "score_line": 264,
            "planned": 13,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "871.0",
            "retake_content": "数字电子技术或软件设计基础（Python）\n参考教材：\n1.《数字电子技术基础》第6版.阎石.高等教育出版社.2016.\n2.《Python 程序设计》第3版.董付国.清华大学出版社.2020.；通信原理或数据结构\n参考教材：\n1.《通信原理》第7版。樊昌信,曹丽娜.国防工业出版社.2015.\n2.《数据结构(Python 版)》。吕云翔,郭颖美,孟爻.清华大学出版社,2019."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 312.0,
            "max": 386,
            "min": 266,
            "score_line": 264,
            "planned": 63,
            "actual": 63,
            "retake_count": 65,
            "ratio": 1.0,
            "note": null,
            "retake_code": "871.0",
            "retake_content": "数字电子技术或软件设计基础（Python）\n参考教材：\n1.《数字电子技术基础》第6版.阎石.高等教育出版社.2016.\n2.《Python 程序设计》第3版.董付国.清华大学出版社.2020.；通信原理或数据结构\n参考教材：\n1.《通信原理》第7版。樊昌信,曹丽娜.国防工业出版社.2015.\n2.《数据结构(Python 版)》。吕云翔,郭颖美,孟爻.清华大学出版社,2019."
          }
        ]
      }
    ],
    "summary": {
      "avg": 308.5,
      "max": 386,
      "min": 266,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 76,
      "actual_total": 64,
      "retake_people_total": 66
    },
    "retake_subjects": "数字电子技术或软件设计基础（Python）\n参考教材：\n1.《数字电子技术基础》第6版.阎石.高等教育出版社.2016.\n2.《Python 程序设计》第3版.董付国.清华大学出版社.2020.；通信原理或数据结构\n参考教材：\n1.《通信原理》第7版。樊昌信,曹丽娜.国防工业出版社.2015.\n2.《数据结构(Python 版)》。吕云翔,郭颖美,孟爻.清华大学出版社,2019."
  },
  "华东交通大学": {
    "colleges": [
      {
        "name": "信息与软件工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 326.0,
            "max": 373,
            "min": 265,
            "score_line": 264,
            "planned": 14,
            "actual": 10,
            "retake_count": 11,
            "ratio": 1.1,
            "note": null,
            "retake_code": "816.0",
            "retake_content": "通信原理\n参考教材：《通信原理》（第七版），樊昌信著"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 349.0,
            "max": 429,
            "min": 297,
            "score_line": 296,
            "planned": 32,
            "actual": 55,
            "retake_count": 56,
            "ratio": 1.0,
            "note": null,
            "retake_code": "816.0",
            "retake_content": "通信原理\n参考教材：《通信原理》（第七版），樊昌信著"
          }
        ]
      }
    ],
    "summary": {
      "avg": 337.5,
      "max": 429,
      "min": 265,
      "min_line": 264,
      "max_line": 296,
      "planned_total": 46,
      "actual_total": 65,
      "retake_people_total": 67
    },
    "retake_subjects": "通信原理\n参考教材：《通信原理》（第七版），樊昌信著"
  },
  "华东理工大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 359.0,
            "max": 377,
            "min": 342,
            "score_line": 338,
            "planned": 13,
            "actual": 13,
            "retake_count": 18,
            "ratio": 1.4,
            "note": null,
            "retake_code": "814.0",
            "retake_content": "笔试科目：模拟和数字电子技术                 \n参考书目：1.《模拟电子技术基础》第五版.童诗白,华成英.高教出版社2.《数字电子技术基础》第六版.阎石,王红.高教出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 385.0,
            "max": 418,
            "min": 355,
            "score_line": 355,
            "planned": 30,
            "actual": 30,
            "retake_count": 41,
            "ratio": 1.4,
            "note": null,
            "retake_code": "814.0",
            "retake_content": "笔试科目：模拟和数字电子技术                 \n参考书目：1.《模拟电子技术基础》第五版.童诗白,华成英.高教出版社2.《数字电子技术基础》第六版.阎石,王红.高教出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 372.0,
      "max": 418,
      "min": 342,
      "min_line": 338,
      "max_line": 355,
      "planned_total": 43,
      "actual_total": 43,
      "retake_people_total": 59
    },
    "retake_subjects": "笔试科目：模拟和数字电子技术                 \n参考书目：1.《模拟电子技术基础》第五版.童诗白,华成英.高教出版社2.《数字电子技术基础》第六版.阎石,王红.高教出版社."
  },
  "华中农业大学": {
    "colleges": [
      {
        "name": "工学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 382.0,
            "max": 404,
            "min": 360,
            "score_line": 340,
            "planned": 15,
            "actual": 15,
            "retake_count": 21,
            "ratio": 1.4,
            "note": null,
            "retake_code": "876.0",
            "retake_content": "数字电路（《电子技术基础》数字部分）\n参考书目：官网未提供参考书目"
          }
        ]
      }
    ],
    "summary": {
      "avg": 382.0,
      "max": 404,
      "min": 360,
      "min_line": 340,
      "max_line": 340,
      "planned_total": 15,
      "actual_total": 15,
      "retake_people_total": 21
    },
    "retake_subjects": "数字电路（《电子技术基础》数字部分）\n参考书目：官网未提供参考书目"
  },
  "华中师范大学": {
    "colleges": [
      {
        "name": "伍伦贡联合研究院",
        "majors": [
          {
            "name": "085402（专）通信工程",
            "avg": 323.0,
            "max": 403,
            "min": 269,
            "score_line": 264,
            "planned": 38,
            "actual": 25,
            "retake_count": 26,
            "ratio": 1.0,
            "note": null,
            "retake_code": "838.0",
            "retake_content": "专业笔试：主要考察学生的专业基础能力、英语水平和数理逻辑思维能力。"
          }
        ]
      },
      {
        "name": "物理科学与技术学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 337.0,
            "max": 402,
            "min": 275,
            "score_line": 264,
            "planned": 13,
            "actual": 15,
            "retake_count": 15,
            "ratio": 1.0,
            "note": null,
            "retake_code": "838.0",
            "retake_content": "笔试专业综合：模拟电路、数字电路、电路分析、信号与系统、数字信号处理、通信原理、微机原理与接口技术、C语言程序设计"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 354.0,
            "max": 406,
            "min": 320,
            "score_line": 318,
            "planned": 13,
            "actual": 17,
            "retake_count": 22,
            "ratio": 1.3,
            "note": null,
            "retake_code": "838.0",
            "retake_content": "笔试专业综合：模拟电路、数字电路、电路分析、信号与系统、数字信号处理、通信原理、微机原理与接口技术、C语言程序设计"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 391.0,
            "max": 427,
            "min": 363,
            "score_line": 362,
            "planned": 28,
            "actual": 45,
            "retake_count": 57,
            "ratio": 1.3,
            "note": null,
            "retake_code": "838.0",
            "retake_content": "笔试专业综合：模拟电路、数字电路、电路分析、信号与系统、数字信号处理、通信原理、微机原理与接口技术、C语言程序设计"
          }
        ]
      }
    ],
    "summary": {
      "avg": 351.2,
      "max": 427,
      "min": 269,
      "min_line": 264,
      "max_line": 362,
      "planned_total": 92,
      "actual_total": 102,
      "retake_people_total": 120
    },
    "retake_subjects": "笔试专业综合：模拟电路、数字电路、电路分析、信号与系统、数字信号处理、通信原理、微机原理与接口技术、C语言程序设计；专业笔试：主要考察学生的专业基础能力、英语水平和数理逻辑思维能力。"
  },
  "华中科技大学": {
    "colleges": [
      {
        "name": "光学与电子信息学院",
        "majors": [
          {
            "name": "085402（专）通信工程",
            "avg": 352.0,
            "max": 352,
            "min": 352,
            "score_line": 330,
            "planned": 1,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "笔试科目：通信原理                              \n参考书目：《通信原理》，樊昌信，曹丽娜，国防工业出版社，第七版"
          }
        ]
      },
      {
        "name": "电子信息与通信学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 362.0,
            "max": 387,
            "min": 337,
            "score_line": 337,
            "planned": 11,
            "actual": 11,
            "retake_count": 14,
            "ratio": 1.3,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "笔试科目：主要包括专业综合题（6选 4）：通信原理、数字信号处理、计算机网络、计算机软件基础、数字电路、微波技术。                           \n 参考书目：（无官方指定参考书目）"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 373.0,
            "max": 416,
            "min": 338,
            "score_line": 278,
            "planned": 17,
            "actual": 17,
            "retake_count": 21,
            "ratio": 1.2,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "笔试科目：主要包括专业综合题（6选 4）：通信原理、数字信号处理、计算机网络、计算机软件基础、数字电路、微波技术。                           \n 参考书目：（无官方指定参考书目）"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 380.0,
            "max": 418,
            "min": 355,
            "score_line": 301,
            "planned": 55,
            "actual": 61,
            "retake_count": 85,
            "ratio": 1.4,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "笔试科目：主要包括专业综合题（6选 4）：通信原理、数字信号处理、计算机网络、计算机软件基础、数字电路、微波技术。                           \n 参考书目：（无官方指定参考书目）"
          }
        ]
      },
      {
        "name": "网络空间安全学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 368.0,
            "max": 392,
            "min": 347,
            "score_line": 335,
            "planned": 7,
            "actual": 7,
            "retake_count": 10,
            "ratio": 1.4,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "笔试科目：信号与线性系统、通信原理、数字电\n路等科目                                      \n参考书目：①《信号与系统》第2版，电子工业出版社，奥本海姆著；②《通信原理》第七版，樊昌信等编著，国防工业出版社；③《电子技术基础（数字部分）》第6版，华中科技大学电子技术议程组编，高等教育出版社）。；复试：专业技能考核+专业知识测试                                         \n专业技能考核：进行通信系统设计、基本编程能力测试。\n编程题目考生可以使用C、C++或python语言，通信系统设计涉及数字通信系统\n基本原理等的内容，以画图形式完成相关设计内容。                                             笔试科目：信号与线性系统、通信原理、数字电路等科目                                      参考书目：①《信号与系统》第2版，电子工业出版社，奥本海姆著；②《通信原理》第七版，樊昌信等编著，国防工业出版社；③《电子技术基础（数字部分）》第6版，华中科技大学电子技术议程组编，高等教育出版社）。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 351.0,
            "max": 377,
            "min": 326,
            "score_line": 325,
            "planned": 13,
            "actual": 13,
            "retake_count": 15,
            "ratio": 1.2,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "笔试科目：信号与线性系统、通信原理、数字电\n路等科目                                      \n参考书目：①《信号与系统》第2版，电子工业出版社，奥本海姆著；②《通信原理》第七版，樊昌信等编著，国防工业出版社；③《电子技术基础（数字部分）》第6版，华中科技大学电子技术议程组编，高等教育出版社）。；复试：专业技能考核+专业知识测试                                         \n专业技能考核：进行通信系统设计、基本编程能力测试。\n编程题目考生可以使用C、C++或python语言，通信系统设计涉及数字通信系统\n基本原理等的内容，以画图形式完成相关设计内容。                                             笔试科目：信号与线性系统、通信原理、数字电路等科目                                      参考书目：①《信号与系统》第2版，电子工业出版社，奥本海姆著；②《通信原理》第七版，樊昌信等编著，国防工业出版社；③《电子技术基础（数字部分）》第6版，华中科技大学电子技术议程组编，高等教育出版社）。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 364.3,
      "max": 418,
      "min": 326,
      "min_line": 278,
      "max_line": 337,
      "planned_total": 104,
      "actual_total": 110,
      "retake_people_total": 146
    },
    "retake_subjects": "笔试科目：主要包括专业综合题（6选 4）：通信原理、数字信号处理、计算机网络、计算机软件基础、数字电路、微波技术。                           \n 参考书目：（无官方指定参考书目）；笔试科目：通信原理                              \n参考书目：《通信原理》，樊昌信，曹丽娜，国防工业出版社，第七版；笔试科目：信号与线性系统、通信原理、数字电\n路等科目                                      \n参考书目：①《信号与系统》第2版，电子工业出版社，奥本海姆著；②《通信原理》第七版，樊昌信等编著，国防工业出版社；③《电子技术基础（数字部分）》第6版，华中科技大学电子技术议程组编，高等教育出版社）。；复试：专业技能考核+专业知识测试                                         \n专业技能考核：进行通信系统设计、基本编程能力测试。\n编程题目考生可以使用C、C++或python语言，通信系统设计涉及数字通信系统\n基本原理等的内容，以画图形式完成相关设计内容。                                             笔试科目：信号与线性系统、通信原理、数字电路等科目                                      参考书目：①《信号与系统》第2版，电子工业出版社，奥本海姆著；②《通信原理》第七版，樊昌信等编著，国防工业出版社；③《电子技术基础（数字部分）》第6版，华中科技大学电子技术议程组编，高等教育出版社）。"
  },
  "华北理工大学": {
    "colleges": [
      {
        "name": "人工智能学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 332.8,
            "max": 405,
            "min": 296,
            "score_line": 264,
            "planned": 15,
            "actual": 16,
            "retake_count": 24,
            "ratio": 1.5,
            "note": null,
            "retake_code": "816.0",
            "retake_content": "笔试：040数字信号处理\n参考书目：《数字信号处理》第四版 ，西安电子科技大学出版社 ，高西全、丁玉美"
          }
        ]
      }
    ],
    "summary": {
      "avg": 332.8,
      "max": 405,
      "min": 296,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 15,
      "actual_total": 16,
      "retake_people_total": 24
    },
    "retake_subjects": "笔试：040数字信号处理\n参考书目：《数字信号处理》第四版 ，西安电子科技大学出版社 ，高西全、丁玉美"
  },
  "华北电力大学": {
    "colleges": [
      {
        "name": "电气与电子工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 339.0,
            "max": 387,
            "min": 289,
            "score_line": 288,
            "planned": 18,
            "actual": 18,
            "retake_count": 24,
            "ratio": 1.3,
            "note": null,
            "retake_code": "813.0",
            "retake_content": "笔试：电子与通信技术综合\n通信原理及现代交换技术50%+电子技术综合50%"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 379.0,
            "max": 424,
            "min": 340,
            "score_line": 339,
            "planned": 47,
            "actual": 47,
            "retake_count": 72,
            "ratio": 1.5,
            "note": null,
            "retake_code": "813.0",
            "retake_content": "笔试：电子与通信技术综合\n通信原理及现代交换技术50%+电子技术综合50%"
          }
        ]
      }
    ],
    "summary": {
      "avg": 359.0,
      "max": 424,
      "min": 289,
      "min_line": 288,
      "max_line": 339,
      "planned_total": 65,
      "actual_total": 65,
      "retake_people_total": 96
    },
    "retake_subjects": "笔试：电子与通信技术综合\n通信原理及现代交换技术50%+电子技术综合50%"
  },
  "华北电力大学（保定）": {
    "colleges": [
      {
        "name": "电子与通信工程系",
        "majors": [
          {
            "name": "080900（学）电子科学技术",
            "avg": 329.6,
            "max": 395,
            "min": 279,
            "score_line": 264,
            "planned": 5,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "832.0",
            "retake_content": "复试专业课：536电子系统设计\n参考教材：官网未公布。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 329.6,
      "max": 395,
      "min": 279,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 5,
      "actual_total": 6,
      "retake_people_total": 6
    },
    "retake_subjects": "复试专业课：536电子系统设计\n参考教材：官网未公布。"
  },
  "华南农业大学": {
    "colleges": [
      {
        "name": "人工智能与低空技术学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 296.0,
            "max": 348,
            "min": 276,
            "score_line": 276,
            "planned": 5,
            "actual": 5,
            "retake_count": 5,
            "ratio": 1.0,
            "note": null,
            "retake_code": "877.0",
            "retake_content": "综合素质、专业知识（电子技术基础/数字信号处理/通信原理/嵌入式技术）、外语口语和听力"
          }
        ]
      }
    ],
    "summary": {
      "avg": 296.0,
      "max": 348,
      "min": 276,
      "min_line": 276,
      "max_line": 276,
      "planned_total": 5,
      "actual_total": 5,
      "retake_people_total": 5
    },
    "retake_subjects": "综合素质、专业知识（电子技术基础/数字信号处理/通信原理/嵌入式技术）、外语口语和听力"
  },
  "华南师范大学": {
    "colleges": [
      {
        "name": "电子科学与工程学院（微电子学院）",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 354.0,
            "max": 391,
            "min": 318,
            "score_line": 296,
            "planned": 26,
            "actual": 31,
            "retake_count": 47,
            "ratio": 1.5,
            "note": null,
            "retake_code": "837.0",
            "retake_content": "4802微机原理及应用或04806数字信号处理\n参考教材：官网未公布。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 354.0,
      "max": 391,
      "min": 318,
      "min_line": 296,
      "max_line": 296,
      "planned_total": 26,
      "actual_total": 31,
      "retake_people_total": 47
    },
    "retake_subjects": "4802微机原理及应用或04806数字信号处理\n参考教材：官网未公布。"
  },
  "华南理工大学": {
    "colleges": [
      {
        "name": "微电子学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 390.0,
            "max": 445,
            "min": 355,
            "score_line": 355,
            "planned": 26,
            "actual": 27,
            "retake_count": 39,
            "ratio": 1.4,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F23 半导体物理\n参考书目：官网未给出具体的参考书目；复试科目：F24 模拟电子技术基础和数字电子技术基础\n参考书目：\n1.《模拟电子技术基础》第5版/第6版.童诗白,华成英主编.高等教育出版社.2015（第5版）/2023（第6版）.\n2.《数字电子技术基础》第6版.阎石主编.高等教育出版社.2016."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 403.5,
            "max": 438,
            "min": 382,
            "score_line": 381,
            "planned": 115,
            "actual": 33,
            "retake_count": 174,
            "ratio": 2.0,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F23 半导体物理\n参考书目：官网未给出具体的参考书目；复试科目：F24 模拟电子技术基础和数字电子技术基础\n参考书目：\n1.《模拟电子技术基础》第5版/第6版.童诗白,华成英主编.高等教育出版社.2015（第5版）/2023（第6版）.\n2.《数字电子技术基础》第6版.阎石主编.高等教育出版社.2016."
          }
        ]
      },
      {
        "name": "未来技术学院",
        "majors": [
          {
            "name": "05400（专）电子信息",
            "avg": 412.5,
            "max": 449,
            "min": 382,
            "score_line": 381,
            "planned": 115,
            "actual": 10,
            "retake_count": 174,
            "ratio": 2.0,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "复试科目：F24 模拟电子技术基础和数字电子技术基础\n参考书目：\n1.《模拟电子技术基础》第5版/第6版.童诗白,华成英主编.高等教育出版社.2015（第5版）/2023（第6版）.\n2.《数字电子技术基础》第6版.阎石主编.高等教育出版社.2016."
          }
        ]
      },
      {
        "name": "电子与信息学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 335.3,
            "max": 344,
            "min": 328,
            "score_line": 328,
            "planned": 4,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "复试科目：F24 模拟电子技术基础和数字电子技术基础\n参考书目：\n1.《模拟电子技术基础》第5版/第6版.童诗白,华成英主编.高等教育出版社.2015（第5版）/2023（第6版）.\n2.《数字电子技术基础》第6版.阎石主编.高等教育出版社.2016."
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 402.6,
            "max": 438,
            "min": 368,
            "score_line": 353,
            "planned": 21,
            "actual": 23,
            "retake_count": 30,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "复试科目：F24 模拟电子技术基础和数字电子技术基础\n参考书目：\n1.《模拟电子技术基础》第5版/第6版.童诗白,华成英主编.高等教育出版社.2015（第5版）/2023（第6版）.\n2.《数字电子技术基础》第6版.阎石主编.高等教育出版社.2016."
          },
          {
            "name": "05400（专）电子信息",
            "avg": 409.6,
            "max": 455,
            "min": 383,
            "score_line": 381,
            "planned": 115,
            "actual": 89,
            "retake_count": 174,
            "ratio": 2.0,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "复试科目：F24 模拟电子技术基础和数字电子技术基础\n参考书目：\n1.《模拟电子技术基础》第5版/第6版.童诗白,华成英主编.高等教育出版社.2015（第5版）/2023（第6版）.\n2.《数字电子技术基础》第6版.阎石主编.高等教育出版社.2016."
          }
        ]
      },
      {
        "name": "集成电路学院",
        "majors": [
          {
            "name": "140100（学）集成电路科学与工程",
            "avg": 358.7,
            "max": 397,
            "min": 321,
            "score_line": 320,
            "planned": 9,
            "actual": 7,
            "retake_count": 7,
            "ratio": 1.0,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F23 半导体物理\n参考书目：官网未给出具体的参考书目"
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 385.8,
            "max": 416,
            "min": 347,
            "score_line": 346,
            "planned": 10,
            "actual": 10,
            "retake_count": 15,
            "ratio": 1.5,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F23 半导体物理\n参考书目：官网未给出具体的参考书目"
          }
        ]
      }
    ],
    "summary": {
      "avg": 387.2,
      "max": 455,
      "min": 321,
      "min_line": 320,
      "max_line": 381,
      "planned_total": 415,
      "actual_total": 202,
      "retake_people_total": 616
    },
    "retake_subjects": "复试科目：F24 模拟电子技术基础和数字电子技术基础\n参考书目：\n1.《模拟电子技术基础》第5版/第6版.童诗白,华成英主编.高等教育出版社.2015（第5版）/2023（第6版）.\n2.《数字电子技术基础》第6版.阎石主编.高等教育出版社.2016.；F23 半导体物理\n参考书目：官网未给出具体的参考书目；F23 半导体物理\n参考书目：官网未给出具体的参考书目；复试科目：F24 模拟电子技术基础和数字电子技术基础\n参考书目：\n1.《模拟电子技术基础》第5版/第6版.童诗白,华成英主编.高等教育出版社.2015（第5版）/2023（第6版）.\n2.《数字电子技术基础》第6版.阎石主编.高等教育出版社.2016."
  },
  "南京信息工程大学": {
    "colleges": [
      {
        "name": "南信大-国防科大第六十三研究所联合培养基地",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 310.0,
            "max": 368,
            "min": 274,
            "score_line": 264,
            "planned": 5,
            "actual": 5,
            "retake_count": 6,
            "ratio": 1.2,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 387.0,
            "max": 428,
            "min": 351,
            "score_line": 351,
            "planned": 20,
            "actual": 20,
            "retake_count": 26,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          }
        ]
      },
      {
        "name": "南信大无锡研究生联合培养基地",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 384.0,
            "max": 430,
            "min": 356,
            "score_line": 356,
            "planned": 30,
            "actual": 30,
            "retake_count": 39,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          }
        ]
      },
      {
        "name": "南信大浦口经开区创新港研究生培养基地",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 332.0,
            "max": 346,
            "min": 326,
            "score_line": 264,
            "planned": 5,
            "actual": 4,
            "retake_count": 4,
            "ratio": 1.0,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 395.0,
            "max": 418,
            "min": 376,
            "score_line": 376,
            "planned": 30,
            "actual": 35,
            "retake_count": 46,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          }
        ]
      },
      {
        "name": "电子与信息工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 319.0,
            "max": 349,
            "min": 281,
            "score_line": 264,
            "planned": 14,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 354.0,
            "max": 396,
            "min": 321,
            "score_line": 321,
            "planned": 30,
            "actual": 39,
            "retake_count": 45,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 395.0,
            "max": 433,
            "min": 376,
            "score_line": 376,
            "planned": 62,
            "actual": 75,
            "retake_count": 93,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 393.0,
            "max": 440,
            "min": 371,
            "score_line": 371,
            "planned": 41,
            "actual": 48,
            "retake_count": 63,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          }
        ]
      },
      {
        "name": "集成电路学院",
        "majors": [
          {
            "name": "085403（专）集成电路工程",
            "avg": 383.0,
            "max": 423,
            "min": 350,
            "score_line": 349,
            "planned": 41,
            "actual": 49,
            "retake_count": 62,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "F17 模电与数电"
          }
        ]
      }
    ],
    "summary": {
      "avg": 365.2,
      "max": 440,
      "min": 274,
      "min_line": 264,
      "max_line": 376,
      "planned_total": 278,
      "actual_total": 311,
      "retake_people_total": 390
    },
    "retake_subjects": "F17 模电与数电"
  },
  "南京大学": {
    "colleges": [
      {
        "name": "物理学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 400.0,
            "max": 428,
            "min": 378,
            "score_line": 378,
            "planned": 8,
            "actual": 8,
            "retake_count": 11,
            "ratio": 1.4,
            "note": null,
            "retake_code": "851.0",
            "retake_content": "综合面试（思想政治素质与品德、英语听说、综合专业基础）"
          }
        ]
      },
      {
        "name": "电子科学与工程学院",
        "majors": [
          {
            "name": "080902（学）电路与系统",
            "avg": 391.0,
            "max": 401,
            "min": 382,
            "score_line": 382,
            "planned": 3,
            "actual": 3,
            "retake_count": 4,
            "ratio": 1.3,
            "note": null,
            "retake_code": "851.0",
            "retake_content": "笔试科目：数字图像处理                             参考书目：数字图像处理(原书第 3 版)，(美)Rafael C. Gonzalez，Richard E. Woods，阮秋琦 阮宇智译，电子工业出版社；笔试科目：通信原理                                        参考书目：《通信原理》，作者樊昌信、曹丽娜，国防工业出版社；笔试科目：信号与信息处理复试笔试参考《电路》《数字逻辑基础与Verilog设计》《数字电子技术基础》；今年公开复试名单仅1人上线。                       参考书目：\n081002 信号与信息处理\n（1）《电路》（第六版），邱关源、罗先觉，高等教育出版社\n（2）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)、斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（3）《数字电子技术基础》（第三版）阎石主编，高等教育出版社；笔试科目；通信工程复试笔试参考《数字逻辑基础与Verilog设计》《数字电子技术基础》《模拟电子技术基础》；今年统考名额59人、复试73人。             参考书目：（1）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)\n斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（2）《数字电子技术基础》（第五版）阎石主编，高等教育出版社\n（3）《模拟电子技术基础》（第七版），康华光主编，高等教育出版社"
          },
          {
            "name": "081001（学）通信与信息系统",
            "avg": 400.0,
            "max": 401,
            "min": 398,
            "score_line": 390,
            "planned": 2,
            "actual": 2,
            "retake_count": 3,
            "ratio": 1.5,
            "note": null,
            "retake_code": "851.0",
            "retake_content": "笔试科目：数字图像处理                             参考书目：数字图像处理(原书第 3 版)，(美)Rafael C. Gonzalez，Richard E. Woods，阮秋琦 阮宇智译，电子工业出版社；笔试科目：通信原理                                        参考书目：《通信原理》，作者樊昌信、曹丽娜，国防工业出版社；笔试科目：信号与信息处理复试笔试参考《电路》《数字逻辑基础与Verilog设计》《数字电子技术基础》；今年公开复试名单仅1人上线。                       参考书目：\n081002 信号与信息处理\n（1）《电路》（第六版），邱关源、罗先觉，高等教育出版社\n（2）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)、斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（3）《数字电子技术基础》（第三版）阎石主编，高等教育出版社；笔试科目；通信工程复试笔试参考《数字逻辑基础与Verilog设计》《数字电子技术基础》《模拟电子技术基础》；今年统考名额59人、复试73人。             参考书目：（1）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)\n斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（2）《数字电子技术基础》（第五版）阎石主编，高等教育出版社\n（3）《模拟电子技术基础》（第七版），康华光主编，高等教育出版社"
          },
          {
            "name": "081002（学）信号与信息处理",
            "avg": 353.0,
            "max": 353,
            "min": 353,
            "score_line": 295,
            "planned": 1,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "851.0",
            "retake_content": "笔试科目：数字图像处理                             参考书目：数字图像处理(原书第 3 版)，(美)Rafael C. Gonzalez，Richard E. Woods，阮秋琦 阮宇智译，电子工业出版社；笔试科目：通信原理                                        参考书目：《通信原理》，作者樊昌信、曹丽娜，国防工业出版社；笔试科目：信号与信息处理复试笔试参考《电路》《数字逻辑基础与Verilog设计》《数字电子技术基础》；今年公开复试名单仅1人上线。                       参考书目：\n081002 信号与信息处理\n（1）《电路》（第六版），邱关源、罗先觉，高等教育出版社\n（2）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)、斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（3）《数字电子技术基础》（第三版）阎石主编，高等教育出版社；笔试科目；通信工程复试笔试参考《数字逻辑基础与Verilog设计》《数字电子技术基础》《模拟电子技术基础》；今年统考名额59人、复试73人。             参考书目：（1）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)\n斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（2）《数字电子技术基础》（第五版）阎石主编，高等教育出版社\n（3）《模拟电子技术基础》（第七版），康华光主编，高等教育出版社"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 406.0,
            "max": 440,
            "min": 384,
            "score_line": 384,
            "planned": 59,
            "actual": 59,
            "retake_count": 73,
            "ratio": 1.2,
            "note": null,
            "retake_code": "851.0",
            "retake_content": "笔试科目：数字图像处理                             参考书目：数字图像处理(原书第 3 版)，(美)Rafael C. Gonzalez，Richard E. Woods，阮秋琦 阮宇智译，电子工业出版社；笔试科目：通信原理                                        参考书目：《通信原理》，作者樊昌信、曹丽娜，国防工业出版社；笔试科目：信号与信息处理复试笔试参考《电路》《数字逻辑基础与Verilog设计》《数字电子技术基础》；今年公开复试名单仅1人上线。                       参考书目：\n081002 信号与信息处理\n（1）《电路》（第六版），邱关源、罗先觉，高等教育出版社\n（2）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)、斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（3）《数字电子技术基础》（第三版）阎石主编，高等教育出版社；笔试科目；通信工程复试笔试参考《数字逻辑基础与Verilog设计》《数字电子技术基础》《模拟电子技术基础》；今年统考名额59人、复试73人。             参考书目：（1）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)\n斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（2）《数字电子技术基础》（第五版）阎石主编，高等教育出版社\n（3）《模拟电子技术基础》（第七版），康华光主编，高等教育出版社"
          }
        ]
      },
      {
        "name": "集成电路学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 407.0,
            "max": 442,
            "min": 382,
            "score_line": 382,
            "planned": 16,
            "actual": 16,
            "retake_count": 20,
            "ratio": 1.2,
            "note": null,
            "retake_code": "851.0",
            "retake_content": "笔试科目：《电路》《数字电子技术基础》《模拟电子技术基础》；今年统考名额16人、复试20人。参考书目：1.《电路》（第六版），邱关源原著、罗先觉主编，高等教\n育出版社，2022 年；\n2.《数字电子技术基础》（第六版），阎石，高等教育出版\n社，2016 年；\n3.《〈电子技术基础〉模拟部分》（第七版），康光华、张\n林主编，高等教育出版社，2021 年。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 392.8,
      "max": 442,
      "min": 353,
      "min_line": 295,
      "max_line": 390,
      "planned_total": 89,
      "actual_total": 89,
      "retake_people_total": 112
    },
    "retake_subjects": "综合面试（思想政治素质与品德、英语听说、综合专业基础）；笔试科目：数字图像处理                             参考书目：数字图像处理(原书第 3 版)，(美)Rafael C. Gonzalez，Richard E. Woods，阮秋琦 阮宇智译，电子工业出版社；笔试科目：通信原理                                        参考书目：《通信原理》，作者樊昌信、曹丽娜，国防工业出版社；笔试科目：信号与信息处理复试笔试参考《电路》《数字逻辑基础与Verilog设计》《数字电子技术基础》；今年公开复试名单仅1人上线。                       参考书目：\n081002 信号与信息处理\n（1）《电路》（第六版），邱关源、罗先觉，高等教育出版社\n（2）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)、斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（3）《数字电子技术基础》（第三版）阎石主编，高等教育出版社；笔试科目；通信工程复试笔试参考《数字逻辑基础与Verilog设计》《数字电子技术基础》《模拟电子技术基础》；今年统考名额59人、复试73人。             参考书目：（1）《数字逻辑基础与 Verilog 设计(原书第 3 版）》，斯蒂芬·布朗(Stephen Brown)\n斯万克·瓦拉纳西(Zvonko Vranesic)著，机械工业出版社\n（2）《数字电子技术基础》（第五版）阎石主编，高等教育出版社\n（3）《模拟电子技术基础》（第七版），康华光主编，高等教育出版社；笔试科目：《电路》《数字电子技术基础》《模拟电子技术基础》；今年统考名额16人、复试20人。参考书目：1.《电路》（第六版），邱关源原著、罗先觉主编，高等教\n育出版社，2022 年；\n2.《数字电子技术基础》（第六版），阎石，高等教育出版\n社，2016 年；\n3.《〈电子技术基础〉模拟部分》（第七版），康光华、张\n林主编，高等教育出版社，2021 年。"
  },
  "南京理工大学": {
    "colleges": [
      {
        "name": "微电子学院（集成电路学院）",
        "majors": [
          {
            "name": "080901（专）物理电子学",
            "avg": 277.0,
            "max": 277,
            "min": 277,
            "score_line": 275,
            "planned": 20,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "891.0",
            "retake_content": "F62复试科目：半导体物理\n参考教材：《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社.；F60复试科目：模拟电子线路\n参考教材：《模拟电子技术基础》第五版.童诗白,华成英.高等教育出版社.；F61复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社；01/02/03/F1/F2/F3方向：F61微波技术\n04/05/F4/F5方向：F62半导体物理\n参考教材：1.《微波技术》第二版.顾继慧.科学出版社；2.《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社."
          },
          {
            "name": "080902（专）电路与系统",
            "avg": 359.0,
            "max": 359,
            "min": 359,
            "score_line": 330,
            "planned": 15,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "891.0",
            "retake_content": "F62复试科目：半导体物理\n参考教材：《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社.；F60复试科目：模拟电子线路\n参考教材：《模拟电子技术基础》第五版.童诗白,华成英.高等教育出版社.；F61复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社；01/02/03/F1/F2/F3方向：F61微波技术\n04/05/F4/F5方向：F62半导体物理\n参考教材：1.《微波技术》第二版.顾继慧.科学出版社；2.《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社."
          },
          {
            "name": "080904（专）电磁场与微波技术",
            "avg": 355.0,
            "max": 388,
            "min": 300,
            "score_line": 300,
            "planned": 8,
            "actual": 8,
            "retake_count": 10,
            "ratio": 1.2,
            "note": null,
            "retake_code": "891.0",
            "retake_content": "F62复试科目：半导体物理\n参考教材：《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社.；F60复试科目：模拟电子线路\n参考教材：《模拟电子技术基础》第五版.童诗白,华成英.高等教育出版社.；F61复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社；01/02/03/F1/F2/F3方向：F61微波技术\n04/05/F4/F5方向：F62半导体物理\n参考教材：1.《微波技术》第二版.顾继慧.科学出版社；2.《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 412.0,
            "max": 381,
            "min": 434,
            "score_line": 380,
            "planned": 27,
            "actual": 27,
            "retake_count": 35,
            "ratio": 1.3,
            "note": null,
            "retake_code": "891.0",
            "retake_content": "F62复试科目：半导体物理\n参考教材：《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社.；F60复试科目：模拟电子线路\n参考教材：《模拟电子技术基础》第五版.童诗白,华成英.高等教育出版社.；F61复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社；01/02/03/F1/F2/F3方向：F61微波技术\n04/05/F4/F5方向：F62半导体物理\n参考教材：1.《微波技术》第二版.顾继慧.科学出版社；2.《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社."
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 407.1,
            "max": 436,
            "min": 368,
            "score_line": 273,
            "planned": 33,
            "actual": 33,
            "retake_count": 74,
            "ratio": 2.2,
            "note": null,
            "retake_code": "891.0",
            "retake_content": "F62复试科目：半导体物理\n参考教材：《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社.；F60复试科目：模拟电子线路\n参考教材：《模拟电子技术基础》第五版.童诗白,华成英.高等教育出版社.；F61复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社；01/02/03/F1/F2/F3方向：F61微波技术\n04/05/F4/F5方向：F62半导体物理\n参考教材：1.《微波技术》第二版.顾继慧.科学出版社；2.《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社."
          }
        ]
      },
      {
        "name": "电子工程与光电技术学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 377.0,
            "max": 415,
            "min": 336,
            "score_line": 330,
            "planned": 48,
            "actual": 48,
            "retake_count": 63,
            "ratio": 1.3,
            "note": null,
            "retake_code": "818.0；891.0",
            "retake_content": "F11模拟电子线路和数字信号处理\n参考教材：1.《模拟电子技术基础》第五版.童诗白华成英.高等教育出版社;2.《数字信号处理》第二版.钱玲.电子工业出版社.；F09复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 413.0,
            "max": 447,
            "min": 390,
            "score_line": 390,
            "planned": 137,
            "actual": 137,
            "retake_count": 188,
            "ratio": 1.4,
            "note": null,
            "retake_code": "818.0；891.0",
            "retake_content": "F11模拟电子线路和数字信号处理\n参考教材：1.《模拟电子技术基础》第五版.童诗白华成英.高等教育出版社;2.《数字信号处理》第二版.钱玲.电子工业出版社.；F09复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 346.0,
            "max": 346,
            "min": 346,
            "score_line": 285,
            "planned": 12,
            "actual": 1,
            "retake_count": 6,
            "ratio": 6.0,
            "note": null,
            "retake_code": "818.0；891.0",
            "retake_content": "F11模拟电子线路和数字信号处理\n参考教材：1.《模拟电子技术基础》第五版.童诗白华成英.高等教育出版社;2.《数字信号处理》第二版.钱玲.电子工业出版社.；F09复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 368.3,
      "max": 447,
      "min": 277,
      "min_line": 273,
      "max_line": 390,
      "planned_total": 300,
      "actual_total": 256,
      "retake_people_total": 378
    },
    "retake_subjects": "F11模拟电子线路和数字信号处理\n参考教材：1.《模拟电子技术基础》第五版.童诗白华成英.高等教育出版社;2.《数字信号处理》第二版.钱玲.电子工业出版社.；F09复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社.；F62复试科目：半导体物理\n参考教材：《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社.；F60复试科目：模拟电子线路\n参考教材：《模拟电子技术基础》第五版.童诗白,华成英.高等教育出版社.；F61复试科目：微波技术\n参考教材：《微波技术》第二版.顾继慧.科学出版社；01/02/03/F1/F2/F3方向：F61微波技术\n04/05/F4/F5方向：F62半导体物理\n参考教材：1.《微波技术》第二版.顾继慧.科学出版社；2.《固体电子器件》第六版.Ben G.Streetman著,何小威等译.人民邮电出版社."
  },
  "南京航空航天大学": {
    "colleges": [
      {
        "name": "微波光子技术国家级重点实验室",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 351.0,
            "max": 422,
            "min": 284,
            "score_line": 264,
            "planned": 16,
            "actual": 13,
            "retake_count": 16,
            "ratio": 1.2,
            "note": null,
            "retake_code": "878.0",
            "retake_content": "复试由专业课笔试545信息与通信工程专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015;2.《现代电子技术基础》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020."
          }
        ]
      },
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 371.0,
            "max": 418,
            "min": 336,
            "score_line": 336,
            "planned": 42,
            "actual": 24,
            "retake_count": 37,
            "ratio": 1.5,
            "note": null,
            "retake_code": "878.0；821.0",
            "retake_content": "复试由专业课笔试540电子科学与技术专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《电磁场与电磁波》第4版.谢处方.高等教育出版社.2006；2.《现代电子技术基础(模拟部分)》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020.；复试由专业课笔试545信息与通信工程专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015;2.《现代电子技术基础》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020."
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 391.0,
            "max": 405,
            "min": 371,
            "score_line": 371,
            "planned": 64,
            "actual": 24,
            "retake_count": 38,
            "ratio": 1.6,
            "note": null,
            "retake_code": "878.0；821.0",
            "retake_content": "复试由专业课笔试540电子科学与技术专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《电磁场与电磁波》第4版.谢处方.高等教育出版社.2006；2.《现代电子技术基础(模拟部分)》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020.；复试由专业课笔试545信息与通信工程专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015;2.《现代电子技术基础》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 398.0,
            "max": 447,
            "min": 370,
            "score_line": 370,
            "planned": 97,
            "actual": 74,
            "retake_count": 110,
            "ratio": 1.5,
            "note": null,
            "retake_code": "878.0；821.0",
            "retake_content": "复试由专业课笔试540电子科学与技术专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《电磁场与电磁波》第4版.谢处方.高等教育出版社.2006；2.《现代电子技术基础(模拟部分)》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020.；复试由专业课笔试545信息与通信工程专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015;2.《现代电子技术基础》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020."
          }
        ]
      },
      {
        "name": "集成电路学院",
        "majors": [
          {
            "name": "140100（学）集成电路科学与工程",
            "avg": 340.0,
            "max": 391,
            "min": 297,
            "score_line": 280,
            "planned": 23,
            "actual": 13,
            "retake_count": 19,
            "ratio": 1.5,
            "note": null,
            "retake_code": "878.0",
            "retake_content": "复试由专业课笔试546集成电路科学与工程专业综合和面试两部分组成，总成绩为300分。\n参考教材：1.《现代电子技术基础(模拟部分)》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020.2.《数字集成电路》第2版.Jan M.Rabaey.电子工业出版社."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 381.0,
            "max": 414,
            "min": 341,
            "score_line": 335,
            "planned": 34,
            "actual": 30,
            "retake_count": 45,
            "ratio": 1.5,
            "note": null,
            "retake_code": "878.0",
            "retake_content": "复试由专业课笔试546集成电路科学与工程专业综合和面试两部分组成，总成绩为300分。\n参考教材：1.《现代电子技术基础(模拟部分)》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020.2.《数字集成电路》第2版.Jan M.Rabaey.电子工业出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 372.0,
      "max": 447,
      "min": 284,
      "min_line": 264,
      "max_line": 371,
      "planned_total": 276,
      "actual_total": 178,
      "retake_people_total": 265
    },
    "retake_subjects": "复试由专业课笔试540电子科学与技术专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《电磁场与电磁波》第4版.谢处方.高等教育出版社.2006；2.《现代电子技术基础(模拟部分)》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020.；复试由专业课笔试545信息与通信工程专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015;2.《现代电子技术基础》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020.；复试由专业课笔试546集成电路科学与工程专业综合和面试两部分组成，总成绩为300分。\n参考教材：1.《现代电子技术基础(模拟部分)》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020.2.《数字集成电路》第2版.Jan M.Rabaey.电子工业出版社.；复试由专业课笔试545信息与通信工程专业综合和综合面试两部分组成，总成绩为300分。\n参考教材：\n1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015;2.《现代电子技术基础》第3版.王成华,胡志忠,邵杰,洪峰,刘伟强.北京航空航天大学出版社.2020."
  },
  "南开大学": {
    "colleges": [
      {
        "name": "电子信息与光学工程学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 362.0,
            "max": 417,
            "min": 332,
            "score_line": 300,
            "planned": 13,
            "actual": 13,
            "retake_count": 17,
            "ratio": 1.3,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "微机测试+面试\n上机测试(内容包括专业英语、逻辑分析、电路分析、模拟电路、数字电路、电磁学、信号与系统、通信原理、晶体管原理、电磁场理论、量子力学等)"
          }
        ]
      }
    ],
    "summary": {
      "avg": 362.0,
      "max": 417,
      "min": 332,
      "min_line": 300,
      "max_line": 300,
      "planned_total": 13,
      "actual_total": 13,
      "retake_people_total": 17
    },
    "retake_subjects": "微机测试+面试\n上机测试(内容包括专业英语、逻辑分析、电路分析、模拟电路、数字电路、电磁学、信号与系统、通信原理、晶体管原理、电磁场理论、量子力学等)"
  },
  "南昌大学": {
    "colleges": [
      {
        "name": "信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 364.7,
            "max": 417,
            "min": 342,
            "score_line": 342,
            "planned": 29,
            "actual": 29,
            "retake_count": 38,
            "ratio": 1.4,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "专业课笔试：通信原理                             \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计                                 \n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：通信原理                        \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计\n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：数字信号处理                            \n参考教材：《数字信号处理》第三版.高西全,丁玉美编著.西安电子科技大学出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 400.0,
            "max": 411,
            "min": 377,
            "score_line": 377,
            "planned": null,
            "actual": 69,
            "retake_count": 94,
            "ratio": 1.4,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "专业课笔试：通信原理                             \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计                                 \n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：通信原理                        \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计\n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：数字信号处理                            \n参考教材：《数字信号处理》第三版.高西全,丁玉美编著.西安电子科技大学出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 400.8,
            "max": 443,
            "min": 370,
            "score_line": 370,
            "planned": null,
            "actual": 59,
            "retake_count": 79,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "专业课笔试：通信原理                             \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计                                 \n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：通信原理                        \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计\n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：数字信号处理                            \n参考教材：《数字信号处理》第三版.高西全,丁玉美编著.西安电子科技大学出版社."
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 380.3,
            "max": 412,
            "min": 358,
            "score_line": 347,
            "planned": 23,
            "actual": 23,
            "retake_count": 31,
            "ratio": 1.4,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "专业课笔试：通信原理                             \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计                                 \n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：通信原理                        \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计\n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：数字信号处理                            \n参考教材：《数字信号处理》第三版.高西全,丁玉美编著.西安电子科技大学出版社."
          },
          {
            "name": "085409（专）生物医学工程",
            "avg": 387.6,
            "max": 422,
            "min": 362,
            "score_line": 350,
            "planned": 13,
            "actual": 13,
            "retake_count": 17,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "专业课笔试：通信原理                             \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计                                 \n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：通信原理                        \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计\n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：数字信号处理                            \n参考教材：《数字信号处理》第三版.高西全,丁玉美编著.西安电子科技大学出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 386.7,
      "max": 443,
      "min": 342,
      "min_line": 342,
      "max_line": 377,
      "planned_total": 65,
      "actual_total": 193,
      "retake_people_total": 259
    },
    "retake_subjects": "专业课笔试：通信原理                             \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计                                 \n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：通信原理                        \n参考教材：《通信原理》第七版.樊昌信著.国防工业出版社.；专业课笔试：数字系统与逻辑设计\n参考教材：《数字系统与逻辑设计》第三版.王毓银主编.高等教育出版社.；专业课笔试：数字信号处理                            \n参考教材：《数字信号处理》第三版.高西全,丁玉美编著.西安电子科技大学出版社."
  },
  "厦门大学": {
    "colleges": [
      {
        "name": "信息与通信工程系",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 359.0,
            "max": 387,
            "min": 338,
            "score_line": 307,
            "planned": 5,
            "actual": 3,
            "retake_count": 4,
            "ratio": 1.3,
            "note": null,
            "retake_code": "847.0",
            "retake_content": "C/C++上机考试 + 综合基础面试；信息学院0810J2低空经济与081000、085402共用同一套复试规则，都是C/C++上机考试加综合基础面试。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 400.0,
            "max": 447,
            "min": 319,
            "score_line": 307,
            "planned": 36,
            "actual": 36,
            "retake_count": 54,
            "ratio": 1.5,
            "note": null,
            "retake_code": "847.0",
            "retake_content": "C/C++上机考试 + 综合基础面试；信息学院0810J2低空经济与081000、085402共用同一套复试规则，都是C/C++上机考试加综合基础面试。"
          }
        ]
      },
      {
        "name": "电子科学系",
        "majors": [
          {
            "name": "080901（学）物理电子学",
            "avg": 374.0,
            "max": 403,
            "min": 345,
            "score_line": 345,
            "planned": 3,
            "actual": 8,
            "retake_count": 11,
            "ratio": 1.4,
            "note": null,
            "retake_code": "847.0",
            "retake_content": "《电子线路》（数电+模电）或数字图像处理"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 408.0,
            "max": 427,
            "min": 391,
            "score_line": 385,
            "planned": null,
            "actual": 13,
            "retake_count": 17,
            "ratio": 1.3,
            "note": null,
            "retake_code": "847.0",
            "retake_content": "《电子线路》（数电+模电）或数字图像处理"
          },
          {
            "name": "085410（专）人工智能",
            "avg": 414.0,
            "max": 446,
            "min": 392,
            "score_line": 388,
            "planned": null,
            "actual": 17,
            "retake_count": 23,
            "ratio": 1.4,
            "note": null,
            "retake_code": "847.0",
            "retake_content": "《电子线路》（数电+模电）或数字图像处理"
          },
          {
            "name": "140100（学）集成电路科学与工程",
            "avg": 347.0,
            "max": 396,
            "min": 300,
            "score_line": 300,
            "planned": 6,
            "actual": 12,
            "retake_count": 16,
            "ratio": 1.3,
            "note": null,
            "retake_code": "847.0",
            "retake_content": "《电子线路》（数电+模电）或数字图像处理"
          }
        ]
      },
      {
        "name": "电磁声学研究院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 415.0,
            "max": 435,
            "min": 404,
            "score_line": 404,
            "planned": null,
            "actual": 13,
            "retake_count": 17,
            "ratio": 1.3,
            "note": null,
            "retake_code": "847.0",
            "retake_content": "《电子线路》（数电+模电）或普通物理学"
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 404.0,
            "max": 419,
            "min": 387,
            "score_line": 369,
            "planned": null,
            "actual": 8,
            "retake_count": 11,
            "ratio": 1.4,
            "note": null,
            "retake_code": "847.0",
            "retake_content": "《电子线路》（数电+模电）或普通物理学"
          }
        ]
      }
    ],
    "summary": {
      "avg": 390.1,
      "max": 447,
      "min": 300,
      "min_line": 300,
      "max_line": 404,
      "planned_total": 50,
      "actual_total": 110,
      "retake_people_total": 153
    },
    "retake_subjects": "《电子线路》（数电+模电）或数字图像处理；《电子线路》（数电+模电）或普通物理学；C/C++上机考试 + 综合基础面试；信息学院0810J2低空经济与081000、085402共用同一套复试规则，都是C/C++上机考试加综合基础面试。"
  },
  "合肥工业大学": {
    "colleges": [
      {
        "name": "计算机与信息学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 377.0,
            "max": 421,
            "min": 349,
            "score_line": 339,
            "planned": 38,
            "actual": 20,
            "retake_count": 27,
            "ratio": 1.4,
            "note": null,
            "retake_code": "833.0",
            "retake_content": "0051信息与通信工程专业综合\n参考书目：1.模拟电子线路\n《电子技术基础：模拟部分》第5/6版.康华光.高等教育出版社;《电子线路（线性部分）》.第5版.冯军,谢嘉奎.高等教育出版社.\n2.通信原理\n《通信原理》第6/7版.樊昌信等.国防工业出版社;\n《信息论-基础理论与应用》第4版.傅祖芸.电子工业出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 408.0,
            "max": 446,
            "min": 375,
            "score_line": 355,
            "planned": 60,
            "actual": 39,
            "retake_count": 51,
            "ratio": 1.3,
            "note": null,
            "retake_code": "833.0",
            "retake_content": "0051信息与通信工程专业综合\n参考书目：1.模拟电子线路\n《电子技术基础：模拟部分》第5/6版.康华光.高等教育出版社;《电子线路（线性部分）》.第5版.冯军,谢嘉奎.高等教育出版社.\n2.通信原理\n《通信原理》第6/7版.樊昌信等.国防工业出版社;\n《信息论-基础理论与应用》第4版.傅祖芸.电子工业出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 392.5,
      "max": 446,
      "min": 349,
      "min_line": 339,
      "max_line": 355,
      "planned_total": 98,
      "actual_total": 59,
      "retake_people_total": 78
    },
    "retake_subjects": "0051信息与通信工程专业综合\n参考书目：1.模拟电子线路\n《电子技术基础：模拟部分》第5/6版.康华光.高等教育出版社;《电子线路（线性部分）》.第5版.冯军,谢嘉奎.高等教育出版社.\n2.通信原理\n《通信原理》第6/7版.樊昌信等.国防工业出版社;\n《信息论-基础理论与应用》第4版.傅祖芸.电子工业出版社."
  },
  "哈尔滨商业大学": {
    "colleges": [
      {
        "name": "计算机与信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 350.0,
            "max": 350,
            "min": 350,
            "score_line": 264,
            "planned": 16,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "809.0",
            "retake_content": "复试科目：\n①数字信号处理\n②随机信号分析\n③单片机原理及应用\n①②③任选其二\n参考教材：官网未公布。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 350.0,
      "max": 350,
      "min": 350,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 16,
      "actual_total": 1,
      "retake_people_total": 1
    },
    "retake_subjects": "复试科目：\n①数字信号处理\n②随机信号分析\n③单片机原理及应用\n①②③任选其二\n参考教材：官网未公布。"
  },
  "哈尔滨工程大学": {
    "colleges": [
      {
        "name": "信息与通信工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 330.0,
            "max": 417,
            "min": 279,
            "score_line": 264,
            "planned": 16,
            "actual": 7,
            "retake_count": 8,
            "ratio": 1.1,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "复试科目：《数字电子技术与通信原理》              参考书目:                                    1、阎石.数字电子技术基础（第五版）.北京:高等教育出版社,2008.                             2、康华光.电子技术基础（数字部分）第五版.北京:高等教育出版社,2010.                      3、宋学君.数字电子技术（第二版）.北京:科学出版社，2008.                                  4、张晓林，宁晓燕.通信原理（第3版）.哈尔滨工程大学出版社，2023.                          5、樊昌信，曹丽娜.通信原理（第7版）.国防工业出版社，2012"
          },
          {
            "name": "081000（学）信息与通信工程-01基础计划",
            "avg": 342.0,
            "max": 397,
            "min": 266,
            "score_line": 264,
            "planned": 56,
            "actual": 22,
            "retake_count": 30,
            "ratio": 1.4,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "复试科目：《数字电子技术与通信原理》              参考书目:                                    1、阎石.数字电子技术基础（第五版）.北京:高等教育出版社,2008.                             2、康华光.电子技术基础（数字部分）第五版.北京:高等教育出版社,2010.                      3、宋学君.数字电子技术（第二版）.北京:科学出版社，2008.                                  4、张晓林，宁晓燕.通信原理（第3版）.哈尔滨工程大学出版社，2023.                          5、樊昌信，曹丽娜.通信原理（第7版）.国防工业出版社，2012"
          },
          {
            "name": "085400（专）电子信息-01基础计划",
            "avg": 344.0,
            "max": 404,
            "min": 269,
            "score_line": 264,
            "planned": 134,
            "actual": 127,
            "retake_count": 192,
            "ratio": 1.5,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "复试科目：《数字电子技术与通信原理》              参考书目:                                    1、阎石.数字电子技术基础（第五版）.北京:高等教育出版社,2008.                             2、康华光.电子技术基础（数字部分）第五版.北京:高等教育出版社,2010.                      3、宋学君.数字电子技术（第二版）.北京:科学出版社，2008.                                  4、张晓林，宁晓燕.通信原理（第3版）.哈尔滨工程大学出版社，2023.                          5、樊昌信，曹丽娜.通信原理（第7版）.国防工业出版社，2012"
          },
          {
            "name": "085400（专）电子信息-03龙江工程师学院专项（先进智能感知）",
            "avg": 346.6,
            "max": 408,
            "min": 282,
            "score_line": 264,
            "planned": 40,
            "actual": 20,
            "retake_count": 34,
            "ratio": 1.7,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "复试科目：《数字电子技术与通信原理》              参考书目:                                    1、阎石.数字电子技术基础（第五版）.北京:高等教育出版社,2008.                             2、康华光.电子技术基础（数字部分）第五版.北京:高等教育出版社,2010.                      3、宋学君.数字电子技术（第二版）.北京:科学出版社，2008.                                  4、张晓林，宁晓燕.通信原理（第3版）.哈尔滨工程大学出版社，2023.                          5、樊昌信，曹丽娜.通信原理（第7版）.国防工业出版社，2012"
          }
        ]
      },
      {
        "name": "水声工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程-01基础计划",
            "avg": 353.0,
            "max": 392,
            "min": 309,
            "score_line": 300,
            "planned": 6,
            "actual": 6,
            "retake_count": 14,
            "ratio": 2.3,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          },
          {
            "name": "081000（学）信息与通信工程-02青岛创新发展基地专项",
            "avg": 362.7,
            "max": 403,
            "min": 323,
            "score_line": 264,
            "planned": 34,
            "actual": 18,
            "retake_count": 32,
            "ratio": 1.8,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          },
          {
            "name": "0824J1(学)海洋信息科学与工程-01基础计划",
            "avg": 331.0,
            "max": 386,
            "min": 394,
            "score_line": 285,
            "planned": 8,
            "actual": 8,
            "retake_count": 13,
            "ratio": 1.6,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          },
          {
            "name": "0824J1(学)海洋信息科学与工程-02青岛创新发展基地专项",
            "avg": 290.0,
            "max": 290,
            "min": 290,
            "score_line": 264,
            "planned": 9,
            "actual": 1,
            "retake_count": 4,
            "ratio": 4.0,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          },
          {
            "name": "085400（专）电子信息-01基础计划",
            "avg": 351.0,
            "max": 412,
            "min": 281,
            "score_line": 280,
            "planned": 79,
            "actual": 76,
            "retake_count": 110,
            "ratio": 1.4,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          },
          {
            "name": "085400（专）电子信息-02青岛创新发展基地专项",
            "avg": 362.0,
            "max": 413,
            "min": 306,
            "score_line": 305,
            "planned": 31,
            "actual": 25,
            "retake_count": 41,
            "ratio": 1.6,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          },
          {
            "name": "085400（专）电子信息-03海南（三亚）专项",
            "avg": 336.1,
            "max": 414,
            "min": 264,
            "score_line": 264,
            "planned": 18,
            "actual": 15,
            "retake_count": 23,
            "ratio": 1.5,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          }
        ]
      },
      {
        "name": "烟台研究院",
        "majors": [
          {
            "name": "085400（专）电子信息-03现代通信技术与信息系统",
            "avg": 309.8,
            "max": 356,
            "min": 271,
            "score_line": 264,
            "planned": 49,
            "actual": 5,
            "retake_count": 11,
            "ratio": 2.2,
            "note": null,
            "retake_code": "815.0；810.0",
            "retake_content": "复试科目：《数字电子技术与通信原理》              参考书目:                                    1、阎石.数字电子技术基础（第五版）.北京:高等教育出版社,2008.                             2、康华光.电子技术基础（数字部分）第五版.北京:高等教育出版社,2010.                      3、宋学君.数字电子技术（第二版）.北京:科学出版社，2008.                                  4、张晓林，宁晓燕.通信原理（第3版）.哈尔滨工程大学出版社，2023.                          5、樊昌信，曹丽娜.通信原理（第7版）.国防工业出版社，2012；复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          },
          {
            "name": "085400（专）电子信息-02水声信号处理与应用",
            "avg": 318.0,
            "max": 318,
            "min": 318,
            "score_line": 264,
            "planned": 8,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "815.0；810.0",
            "retake_content": "复试科目：《数字电子技术与通信原理》              参考书目:                                    1、阎石.数字电子技术基础（第五版）.北京:高等教育出版社,2008.                             2、康华光.电子技术基础（数字部分）第五版.北京:高等教育出版社,2010.                      3、宋学君.数字电子技术（第二版）.北京:科学出版社，2008.                                  4、张晓林，宁晓燕.通信原理（第3版）.哈尔滨工程大学出版社，2023.                          5、樊昌信，曹丽娜.通信原理（第7版）.国防工业出版社，2012；复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
          }
        ]
      }
    ],
    "summary": {
      "avg": 336.6,
      "max": 417,
      "min": 264,
      "min_line": 264,
      "max_line": 305,
      "planned_total": 488,
      "actual_total": 331,
      "retake_people_total": 513
    },
    "retake_subjects": "复试科目：《数字电子技术与通信原理》              参考书目:                                    1、阎石.数字电子技术基础（第五版）.北京:高等教育出版社,2008.                             2、康华光.电子技术基础（数字部分）第五版.北京:高等教育出版社,2010.                      3、宋学君.数字电子技术（第二版）.北京:科学出版社，2008.                                  4、张晓林，宁晓燕.通信原理（第3版）.哈尔滨工程大学出版社，2023.                          5、樊昌信，曹丽娜.通信原理（第7版）.国防工业出版社，2012；复试科目：《数字电子技术与通信原理》              参考书目:                                    1、阎石.数字电子技术基础（第五版）.北京:高等教育出版社,2008.                             2、康华光.电子技术基础（数字部分）第五版.北京:高等教育出版社,2010.                      3、宋学君.数字电子技术（第二版）.北京:科学出版社，2008.                                  4、张晓林，宁晓燕.通信原理（第3版）.哈尔滨工程大学出版社，2023.                          5、樊昌信，曹丽娜.通信原理（第7版）.国防工业出版社，2012；复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社；复试科目：模拟电子技术，数字电子技术，数字信号处理。选一，不能与初试科目相同                 \n参考书目：                                  \n模拟电子技术：模拟电子技术基础 （第四版，第五版） 清华大学电子学教研组编 童诗白，华成英主编 高等教育出版社                            \n数字电子技术：\n1、阎石. 数字电子技术基础（第六版） 北京高等教育出版社,2016.\n2、宋学君. 数字电子技术（第二版）北京:科学出版社, 2008.\n3、于佳. 计算机接口技术（第三版）电子工业出版社, 2004.                                  数字信号处理：1.数字信号处理教程（第五版）程佩青编著，清华大学出版社\n2.数字信号处理（第四版）刘顺兰、吴杰编著，西安电子科技大学出版社"
  },
  "哈尔滨理工大学": {
    "colleges": [
      {
        "name": "测控技术与通信工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 320.0,
            "max": 410,
            "min": 264,
            "score_line": 264,
            "planned": 40,
            "actual": 19,
            "retake_count": 19,
            "ratio": 1.0,
            "note": null,
            "retake_code": "813.0",
            "retake_content": "F602 四个科目任选其二：通信原理、数字信号处理、信息论基础、单片机原理及接口技术。         \n参考教材：                                               \n1、通信原理                                   \n①《现代通信原理与技术》第5版.张辉.曹丽娜.西安电子科技大学出版社.2023.\n②《通信原理》第7版.樊昌信.曹丽娜.国防工业出版社.2012.                                   \n2、数字信号处理                                  \n①《数字信号分析与处理》第1版.韩宇辉等.哈尔滨工业大学出版社.2024.\n②《数字信号处理教程》第5版.程佩青.清华大学出版社2017.                                        \n3、信息论基础                                 \n《信息论与编码》第4版.曹雪虹,张宗橙主编.清华大学出版社.2024.                              \n4、单片机原理及接口技术                      \n《单片机原理及应用技术》于天河,兰朝凤,韩玉兰,郭小霞.清华大学出版社.2022."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 354.0,
            "max": 417,
            "min": 284,
            "score_line": 279,
            "planned": 66,
            "actual": 68,
            "retake_count": 90,
            "ratio": 1.3,
            "note": null,
            "retake_code": "813.0",
            "retake_content": "F602 四个科目任选其二：通信原理、数字信号处理、信息论基础、单片机原理及接口技术。         \n参考教材：                                               \n1、通信原理                                   \n①《现代通信原理与技术》第5版.张辉.曹丽娜.西安电子科技大学出版社.2023.\n②《通信原理》第7版.樊昌信.曹丽娜.国防工业出版社.2012.                                   \n2、数字信号处理                                  \n①《数字信号分析与处理》第1版.韩宇辉等.哈尔滨工业大学出版社.2024.\n②《数字信号处理教程》第5版.程佩青.清华大学出版社2017.                                        \n3、信息论基础                                 \n《信息论与编码》第4版.曹雪虹,张宗橙主编.清华大学出版社.2024.                              \n4、单片机原理及接口技术                      \n《单片机原理及应用技术》于天河,兰朝凤,韩玉兰,郭小霞.清华大学出版社.2022."
          }
        ]
      }
    ],
    "summary": {
      "avg": 337.0,
      "max": 417,
      "min": 264,
      "min_line": 264,
      "max_line": 279,
      "planned_total": 106,
      "actual_total": 87,
      "retake_people_total": 109
    },
    "retake_subjects": "F602 四个科目任选其二：通信原理、数字信号处理、信息论基础、单片机原理及接口技术。         \n参考教材：                                               \n1、通信原理                                   \n①《现代通信原理与技术》第5版.张辉.曹丽娜.西安电子科技大学出版社.2023.\n②《通信原理》第7版.樊昌信.曹丽娜.国防工业出版社.2012.                                   \n2、数字信号处理                                  \n①《数字信号分析与处理》第1版.韩宇辉等.哈尔滨工业大学出版社.2024.\n②《数字信号处理教程》第5版.程佩青.清华大学出版社2017.                                        \n3、信息论基础                                 \n《信息论与编码》第4版.曹雪虹,张宗橙主编.清华大学出版社.2024.                              \n4、单片机原理及接口技术                      \n《单片机原理及应用技术》于天河,兰朝凤,韩玉兰,郭小霞.清华大学出版社.2022."
  },
  "四川大学": {
    "colleges": [
      {
        "name": "物理学院",
        "majors": [
          {
            "name": "085400（专）电子信息-01方向",
            "avg": 385.0,
            "max": 404,
            "min": 365,
            "score_line": 365,
            "planned": 3,
            "actual": 7,
            "retake_count": 7,
            "ratio": 1.0,
            "note": null,
            "retake_code": "854.0",
            "retake_content": "半导体集成电路原理\n参考教材：1.《模拟 CMOS 集成电路设计》第2版.[Design of Analog CMOS Integrated Circuits] 毕查德·拉扎维（Behzad Razavi）著,陈贵灿,程军,张瑞智等译.西安交通大学出版社;2.《半导体物理学》第8版.刘恩科著.电子工业出版社."
          }
        ]
      },
      {
        "name": "电子信息学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 382.0,
            "max": 408,
            "min": 354,
            "score_line": 354,
            "planned": 9,
            "actual": 17,
            "retake_count": 26,
            "ratio": 1.5,
            "note": null,
            "retake_code": "854.0",
            "retake_content": "微机原理与接口技术（不含高级语言）\n参考教材：《微机原理与接口技术》第2版.何小海等编著.科学出版社.；大学物理\n参考教材：《大学物理学》第5版.张三慧.清华大学出版社."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 404.0,
            "max": 450,
            "min": 370,
            "score_line": 360,
            "planned": 59,
            "actual": 83,
            "retake_count": 148,
            "ratio": 1.8,
            "note": null,
            "retake_code": "854.0",
            "retake_content": "微机原理与接口技术（不含高级语言）\n参考教材：《微机原理与接口技术》第2版.何小海等编著.科学出版社.；大学物理\n参考教材：《大学物理学》第5版.张三慧.清华大学出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 390.3,
      "max": 450,
      "min": 354,
      "min_line": 354,
      "max_line": 365,
      "planned_total": 71,
      "actual_total": 107,
      "retake_people_total": 181
    },
    "retake_subjects": "微机原理与接口技术（不含高级语言）\n参考教材：《微机原理与接口技术》第2版.何小海等编著.科学出版社.；大学物理\n参考教材：《大学物理学》第5版.张三慧.清华大学出版社.；半导体集成电路原理\n参考教材：1.《模拟 CMOS 集成电路设计》第2版.[Design of Analog CMOS Integrated Circuits] 毕查德·拉扎维（Behzad Razavi）著,陈贵灿,程军,张瑞智等译.西安交通大学出版社;2.《半导体物理学》第8版.刘恩科著.电子工业出版社."
  },
  "国防科技大学": {
    "colleges": [
      {
        "name": "电子科学学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 384.0,
            "max": 434,
            "min": 340,
            "score_line": 340,
            "planned": 8,
            "actual": 8,
            "retake_count": 12,
            "ratio": 1.5,
            "note": null,
            "retake_code": "831.0",
            "retake_content": "复试科目为模拟电子技术基础 / 电磁场与电磁波二选一。；复试科目为模拟电子技术基础。"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 384.0,
            "max": 399,
            "min": 372,
            "score_line": 357,
            "planned": 10,
            "actual": 10,
            "retake_count": 15,
            "ratio": 1.5,
            "note": null,
            "retake_code": "831.0",
            "retake_content": "复试科目为模拟电子技术基础 / 电磁场与电磁波二选一。；复试科目为模拟电子技术基础。"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 375.0,
            "max": 418,
            "min": 331,
            "score_line": 331,
            "planned": 71,
            "actual": 71,
            "retake_count": 90,
            "ratio": 1.3,
            "note": null,
            "retake_code": "831.0",
            "retake_content": "复试科目为模拟电子技术基础 / 电磁场与电磁波二选一。；复试科目为模拟电子技术基础。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 381.0,
      "max": 434,
      "min": 331,
      "min_line": 331,
      "max_line": 357,
      "planned_total": 89,
      "actual_total": 89,
      "retake_people_total": 117
    },
    "retake_subjects": "复试科目为模拟电子技术基础 / 电磁场与电磁波二选一。；复试科目为模拟电子技术基础。"
  },
  "大连交通大学": {
    "colleges": [
      {
        "name": "轨道智能工程学院",
        "majors": [
          {
            "name": "082302（学）交通信息工程及控制",
            "avg": 314.8,
            "max": 354,
            "min": 290,
            "score_line": 264,
            "planned": 10,
            "actual": 4,
            "retake_count": 4,
            "ratio": 1.0,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "笔试科目：712 通信原理\n参考书目：《通信原理教程》（第5版），樊昌信，电子工业出版社，2023年"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 352.8,
            "max": 415,
            "min": 300,
            "score_line": 291,
            "planned": 43,
            "actual": 49,
            "retake_count": 59,
            "ratio": 1.2,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "笔试科目：712 通信原理\n参考书目：《通信原理教程》（第5版），樊昌信，电子工业出版社，2023年"
          }
        ]
      }
    ],
    "summary": {
      "avg": 333.8,
      "max": 415,
      "min": 290,
      "min_line": 264,
      "max_line": 291,
      "planned_total": 53,
      "actual_total": 53,
      "retake_people_total": 63
    },
    "retake_subjects": "笔试科目：712 通信原理\n参考书目：《通信原理教程》（第5版），樊昌信，电子工业出版社，2023年"
  },
  "大连海事大学": {
    "colleges": [
      {
        "name": "信息科学技术学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 329.0,
            "max": 398,
            "min": 291,
            "score_line": 291,
            "planned": 52,
            "actual": 52,
            "retake_count": 65,
            "ratio": 1.2,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "笔试科目：F07通信原理                                             \n参考书目：1.《通信原理实践教程》 王旭东 何荣希大连海事大学出版社\n2.《通信原理教程》 樊昌信 电子工业出版社；笔试科目：F41低频电子线路、数字系统与逻辑设计    \n参考书目：1.《模拟电子线路基础》傅丰林.高等教育出版社;2.《数字逻辑电路与系统设计》第3版.蒋立平.电子工业出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 319.0,
            "max": 368,
            "min": 267,
            "score_line": 267,
            "planned": 20,
            "actual": 19,
            "retake_count": 21,
            "ratio": 1.1,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "笔试科目：F07通信原理                                             \n参考书目：1.《通信原理实践教程》 王旭东 何荣希大连海事大学出版社\n2.《通信原理教程》 樊昌信 电子工业出版社；笔试科目：F41低频电子线路、数字系统与逻辑设计    \n参考书目：1.《模拟电子线路基础》傅丰林.高等教育出版社;2.《数字逻辑电路与系统设计》第3版.蒋立平.电子工业出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 338.0,
            "max": 390,
            "min": 294,
            "score_line": 294,
            "planned": 45,
            "actual": 45,
            "retake_count": 55,
            "ratio": 1.2,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "笔试科目：F07通信原理                                             \n参考书目：1.《通信原理实践教程》 王旭东 何荣希大连海事大学出版社\n2.《通信原理教程》 樊昌信 电子工业出版社；笔试科目：F41低频电子线路、数字系统与逻辑设计    \n参考书目：1.《模拟电子线路基础》傅丰林.高等教育出版社;2.《数字逻辑电路与系统设计》第3版.蒋立平.电子工业出版社."
          },
          {
            "name": "085408（专）光电信息工程",
            "avg": 315.0,
            "max": 346,
            "min": 265,
            "score_line": 265,
            "planned": 10,
            "actual": 10,
            "retake_count": 14,
            "ratio": 1.4,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "笔试科目：F07通信原理                                             \n参考书目：1.《通信原理实践教程》 王旭东 何荣希大连海事大学出版社\n2.《通信原理教程》 樊昌信 电子工业出版社；笔试科目：F41低频电子线路、数字系统与逻辑设计    \n参考书目：1.《模拟电子线路基础》傅丰林.高等教育出版社;2.《数字逻辑电路与系统设计》第3版.蒋立平.电子工业出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 325.2,
      "max": 398,
      "min": 265,
      "min_line": 265,
      "max_line": 294,
      "planned_total": 127,
      "actual_total": 126,
      "retake_people_total": 155
    },
    "retake_subjects": "笔试科目：F07通信原理                                             \n参考书目：1.《通信原理实践教程》 王旭东 何荣希大连海事大学出版社\n2.《通信原理教程》 樊昌信 电子工业出版社；笔试科目：F41低频电子线路、数字系统与逻辑设计    \n参考书目：1.《模拟电子线路基础》傅丰林.高等教育出版社;2.《数字逻辑电路与系统设计》第3版.蒋立平.电子工业出版社."
  },
  "大连理工大学": {
    "colleges": [
      {
        "name": "信息与通信工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 343.0,
            "max": 372,
            "min": 300,
            "score_line": 300,
            "planned": 5,
            "actual": 10,
            "retake_count": 16,
            "ratio": 1.6,
            "note": null,
            "retake_code": "852.0",
            "retake_content": "通信原理、数字信号处理\n参考书目：1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社；2.《数字信号处理教程》第4版.程佩清.清华大学出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 379.0,
            "max": 426,
            "min": 342,
            "score_line": 300,
            "planned": 42,
            "actual": 74,
            "retake_count": 116,
            "ratio": 1.6,
            "note": null,
            "retake_code": "852.0",
            "retake_content": "通信原理、数字信号处理\n参考书目：1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社；2.《数字信号处理教程》第4版.程佩清.清华大学出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 361.0,
      "max": 426,
      "min": 300,
      "min_line": 300,
      "max_line": 300,
      "planned_total": 47,
      "actual_total": 84,
      "retake_people_total": 132
    },
    "retake_subjects": "通信原理、数字信号处理\n参考书目：1.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社；2.《数字信号处理教程》第4版.程佩清.清华大学出版社."
  },
  "天津大学": {
    "colleges": [
      {
        "name": "医学院",
        "majors": [
          {
            "name": "083100（学）生物医学工程",
            "avg": 401.0,
            "max": 426,
            "min": 373,
            "score_line": 315,
            "planned": 3,
            "actual": 3,
            "retake_count": 5,
            "ratio": 1.7,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "医用电子学及微机应用或医学科学与工程基础（二选一）；医学科学与工程基础"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 384.0,
            "max": 398,
            "min": 358,
            "score_line": 315,
            "planned": 3,
            "actual": 3,
            "retake_count": 4,
            "ratio": 1.3,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "医用电子学及微机应用或医学科学与工程基础（二选一）；医学科学与工程基础"
          },
          {
            "name": "0831Z2（学）智能医学工程",
            "avg": 345.0,
            "max": 364,
            "min": 326,
            "score_line": 315,
            "planned": 2,
            "actual": 2,
            "retake_count": 4,
            "ratio": 2.0,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "医用电子学及微机应用或医学科学与工程基础（二选一）；医学科学与工程基础"
          }
        ]
      },
      {
        "name": "微电子学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 341.0,
            "max": 354,
            "min": 328,
            "score_line": 315,
            "planned": 2,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "微电子学与固体电子学综合或电子电路基础（二选一）；工程信息论与数字通信或电子电路基础（二选一）；集成电路科学与工程综合"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 399.0,
            "max": 426,
            "min": 376,
            "score_line": 315,
            "planned": 34,
            "actual": 34,
            "retake_count": 45,
            "ratio": 1.3,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "微电子学与固体电子学综合或电子电路基础（二选一）；工程信息论与数字通信或电子电路基础（二选一）；集成电路科学与工程综合"
          },
          {
            "name": "140100（学）集成电路科学与工程",
            "avg": 372.0,
            "max": 387,
            "min": 339,
            "score_line": 315,
            "planned": 4,
            "actual": 4,
            "retake_count": 6,
            "ratio": 1.5,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "微电子学与固体电子学综合或电子电路基础（二选一）；工程信息论与数字通信或电子电路基础（二选一）；集成电路科学与工程综合"
          }
        ]
      },
      {
        "name": "未来技术学院",
        "majors": [
          {
            "name": "085400（专）电子信息-02方向",
            "avg": 388.0,
            "max": 412,
            "min": 371,
            "score_line": 315,
            "planned": 20,
            "actual": 22,
            "retake_count": 24,
            "ratio": 1.1,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "通信工程基础；仪器科学与技术基础（大学物理）"
          },
          {
            "name": "085400（专）电子信息-07方向",
            "avg": 362.0,
            "max": 391,
            "min": 336,
            "score_line": 315,
            "planned": 4,
            "actual": 4,
            "retake_count": 6,
            "ratio": 1.5,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "通信工程基础；仪器科学与技术基础（大学物理）"
          }
        ]
      },
      {
        "name": "电气自动化与信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 364.0,
            "max": 409,
            "min": 343,
            "score_line": 315,
            "planned": 9,
            "actual": 9,
            "retake_count": 11,
            "ratio": 1.2,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "通信工程基础"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 404.0,
            "max": 425,
            "min": 386,
            "score_line": 315,
            "planned": 16,
            "actual": 16,
            "retake_count": 26,
            "ratio": 1.6,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "通信工程基础"
          },
          {
            "name": "089906（学）低空技术与工程",
            "avg": 359.0,
            "max": 368,
            "min": 349,
            "score_line": 315,
            "planned": 4,
            "actual": 4,
            "retake_count": 8,
            "ratio": 2.0,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "通信工程基础"
          }
        ]
      },
      {
        "name": "福州国际联合学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 371.0,
            "max": 412,
            "min": 348,
            "score_line": 315,
            "planned": 22,
            "actual": 24,
            "retake_count": 33,
            "ratio": 1.4,
            "note": null,
            "retake_code": "815.0",
            "retake_content": "通信工程基础"
          }
        ]
      }
    ],
    "summary": {
      "avg": 374.2,
      "max": 426,
      "min": 326,
      "min_line": 315,
      "max_line": 315,
      "planned_total": 123,
      "actual_total": 127,
      "retake_people_total": 174
    },
    "retake_subjects": "通信工程基础；微电子学与固体电子学综合或电子电路基础（二选一）；工程信息论与数字通信或电子电路基础（二选一）；集成电路科学与工程综合；医用电子学及微机应用或医学科学与工程基础（二选一）；医学科学与工程基础；通信工程基础；仪器科学与技术基础（大学物理）"
  },
  "天津工业大学": {
    "colleges": [
      {
        "name": "生命科学学院",
        "majors": [
          {
            "name": "083100（学）生物医学工程",
            "avg": 295.0,
            "max": 329,
            "min": 271,
            "score_line": 264,
            "planned": 10,
            "actual": 5,
            "retake_count": 5,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "电路分析基础、生物医学电子学、生命科学导论三门科目中选择一门"
          },
          {
            "name": "085400（专）电子信息（医学电子信息工程）",
            "avg": 356.0,
            "max": 394,
            "min": 321,
            "score_line": 313,
            "planned": 31,
            "actual": 37,
            "retake_count": 52,
            "ratio": 1.4,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "电路分析基础、生物医学电子学、生命科学导论三门科目中选择一门"
          }
        ]
      },
      {
        "name": "电子与信息工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 313.0,
            "max": 358,
            "min": 273,
            "score_line": 264,
            "planned": 19,
            "actual": 14,
            "retake_count": 15,
            "ratio": 1.1,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "电路理论 / 微机原理及应用（二选一，不得与初试重复）"
          },
          {
            "name": "081000 （学）信息与通信工程（01）",
            "avg": 337.0,
            "max": 337,
            "min": 337,
            "score_line": 264,
            "planned": 10,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "电路理论 / 微机原理及应用（二选一，不得与初试重复）"
          },
          {
            "name": "081000 （学）信息与通信工程（02）",
            "avg": 315.0,
            "max": 369,
            "min": 265,
            "score_line": 264,
            "planned": 18,
            "actual": 13,
            "retake_count": 13,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "电路理论 / 微机原理及应用（二选一，不得与初试重复）"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 308.0,
            "max": 370,
            "min": 267,
            "score_line": 264,
            "planned": 53,
            "actual": 38,
            "retake_count": 39,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "电路理论 / 微机原理及应用（二选一，不得与初试重复）"
          },
          {
            "name": "085402（专）通信工程（通信信号处理方向）",
            "avg": 327.0,
            "max": 366,
            "min": 291,
            "score_line": 264,
            "planned": 12,
            "actual": 5,
            "retake_count": 5,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "电路理论 / 微机原理及应用（二选一，不得与初试重复）"
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 304.0,
            "max": 366,
            "min": 267,
            "score_line": 264,
            "planned": 43,
            "actual": 20,
            "retake_count": 20,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "电路理论 / 微机原理及应用（二选一，不得与初试重复）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 319.4,
      "max": 394,
      "min": 265,
      "min_line": 264,
      "max_line": 313,
      "planned_total": 196,
      "actual_total": 133,
      "retake_people_total": 150
    },
    "retake_subjects": "电路理论 / 微机原理及应用（二选一，不得与初试重复）；电路分析基础、生物医学电子学、生命科学导论三门科目中选择一门"
  },
  "天津理工大学": {
    "colleges": [
      {
        "name": "集成电路科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 301.0,
            "max": 337,
            "min": 270,
            "score_line": 265,
            "planned": 8,
            "actual": 7,
            "retake_count": 8,
            "ratio": 1.1,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "通信原理\n参考教材：《通信原理》第七版.樊昌信,曹丽娜.国防工业出版社.2019."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 365.0,
            "max": 418,
            "min": 328,
            "score_line": 326,
            "planned": 32,
            "actual": 40,
            "retake_count": 60,
            "ratio": 1.5,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "通信原理\n参考教材：《通信原理》第七版.樊昌信,曹丽娜.国防工业出版社.2019."
          }
        ]
      }
    ],
    "summary": {
      "avg": 333.0,
      "max": 418,
      "min": 270,
      "min_line": 265,
      "max_line": 326,
      "planned_total": 40,
      "actual_total": 47,
      "retake_people_total": 68
    },
    "retake_subjects": "通信原理\n参考教材：《通信原理》第七版.樊昌信,曹丽娜.国防工业出版社.2019."
  },
  "天津科技大学": {
    "colleges": [
      {
        "name": "电子信息与自动化学院",
        "majors": [
          {
            "name": "080400（学）仪器科学与技术",
            "avg": 368.0,
            "max": 368,
            "min": 368,
            "score_line": 264,
            "planned": 11,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "电路\n参考教材：《电路》第五版.邱关源.高等教育出版社.2006."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 341.0,
            "max": 398,
            "min": 290,
            "score_line": 264,
            "planned": 34,
            "actual": 44,
            "retake_count": 59,
            "ratio": 1.3,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "电路\n参考教材：《电路》第五版.邱关源.高等教育出版社.2006."
          }
        ]
      }
    ],
    "summary": {
      "avg": 354.5,
      "max": 398,
      "min": 290,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 45,
      "actual_total": 45,
      "retake_people_total": 60
    },
    "retake_subjects": "电路\n参考教材：《电路》第五版.邱关源.高等教育出版社.2006."
  },
  "天津职业技术师范大学": {
    "colleges": [
      {
        "name": "电子工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 357.0,
            "max": 357,
            "min": 357,
            "score_line": 357,
            "planned": 21,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "804.0",
            "retake_content": "考试科目：（二选一）①数字逻辑设计②信号与系统（首选数字逻辑设计，考生必选与初始科目不同的科目）                                    参考教材：                                   ①数字逻辑设计                                    1.《电子技术基础》（数字部分）.第五版.康华光.高等教育出版社.\n2.《数字电子技术》第五版.阎石.高等教育出版社.  ②信号与系统：                               1、 吴大正主编.信号与线性系统分析(第四版).高等教育出版社.2003年.\n2、 信号与系统（第二版）郑君.应启珩.杨为理.高等教育出版社.2000年."
          }
        ]
      }
    ],
    "summary": {
      "avg": 357.0,
      "max": 357,
      "min": 357,
      "min_line": 357,
      "max_line": 357,
      "planned_total": 21,
      "actual_total": 1,
      "retake_people_total": 1
    },
    "retake_subjects": "考试科目：（二选一）①数字逻辑设计②信号与系统（首选数字逻辑设计，考生必选与初始科目不同的科目）                                    参考教材：                                   ①数字逻辑设计                                    1.《电子技术基础》（数字部分）.第五版.康华光.高等教育出版社.\n2.《数字电子技术》第五版.阎石.高等教育出版社.  ②信号与系统：                               1、 吴大正主编.信号与线性系统分析(第四版).高等教育出版社.2003年.\n2、 信号与系统（第二版）郑君.应启珩.杨为理.高等教育出版社.2000年."
  },
  "太原理工大学": {
    "colleges": [
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 316.0,
            "max": 363,
            "min": 265,
            "score_line": 265,
            "planned": 17,
            "actual": 8,
            "retake_count": 8,
            "ratio": 1.0,
            "note": null,
            "retake_code": "801.0",
            "retake_content": "现场面试（专业知识 50 分 + 综合素质 30 分 + 外语 20 分）"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 373.0,
            "max": 445,
            "min": 340,
            "score_line": 335,
            "planned": 20,
            "actual": 25,
            "retake_count": 31,
            "ratio": 1.2,
            "note": null,
            "retake_code": "801.0",
            "retake_content": "现场面试（专业知识 50 分 + 综合素质 30 分 + 外语 20 分）"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 391.0,
            "max": 421,
            "min": 370,
            "score_line": 365,
            "planned": 31,
            "actual": 40,
            "retake_count": 52,
            "ratio": 1.3,
            "note": null,
            "retake_code": "801.0",
            "retake_content": "现场面试（专业知识 50 分 + 综合素质 30 分 + 外语 20 分）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 360.0,
      "max": 445,
      "min": 265,
      "min_line": 265,
      "max_line": 365,
      "planned_total": 68,
      "actual_total": 73,
      "retake_people_total": 91
    },
    "retake_subjects": "现场面试（专业知识 50 分 + 综合素质 30 分 + 外语 20 分）"
  },
  "太原科技大学": {
    "colleges": [
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 313.0,
            "max": 313,
            "min": 313,
            "score_line": 264,
            "planned": 19,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "复试科目：图像处理技术、通信技术：\n参考书目：\n1.《数字图像处理》.何东键.西安电子科技大学出版社；\n2.《数字视频处理》黎洪松.北京邮电大学出版社；\n3.《通信原理》樊昌信,曹丽娜.国防工业出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 334.9,
            "max": 387,
            "min": 287,
            "score_line": 264,
            "planned": 19,
            "actual": 22,
            "retake_count": 29,
            "ratio": 1.3,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "复试科目：图像处理技术、通信技术：\n参考书目：\n1.《数字图像处理》.何东键.西安电子科技大学出版社；\n2.《数字视频处理》黎洪松.北京邮电大学出版社；\n3.《通信原理》樊昌信,曹丽娜.国防工业出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 329.3,
            "max": 373,
            "min": 275,
            "score_line": 264,
            "planned": 33,
            "actual": 35,
            "retake_count": 45,
            "ratio": 1.3,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "复试科目：图像处理技术、通信技术：\n参考书目：\n1.《数字图像处理》.何东键.西安电子科技大学出版社；\n2.《数字视频处理》黎洪松.北京邮电大学出版社；\n3.《通信原理》樊昌信,曹丽娜.国防工业出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 325.7,
      "max": 387,
      "min": 275,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 71,
      "actual_total": 58,
      "retake_people_total": 75
    },
    "retake_subjects": "复试科目：图像处理技术、通信技术：\n参考书目：\n1.《数字图像处理》.何东键.西安电子科技大学出版社；\n2.《数字视频处理》黎洪松.北京邮电大学出版社；\n3.《通信原理》樊昌信,曹丽娜.国防工业出版社."
  },
  "宁夏大学": {
    "colleges": [
      {
        "name": "电子与电气工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 288.0,
            "max": 292,
            "min": 285,
            "score_line": 254,
            "planned": 23,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "820.0",
            "retake_content": "复试科目：纯面试（电子技术基础+英语听力与口语测试）\n参考书目：\n1.《电子技术基础模拟部分》第7版.康华光主编.高等教育出版社；\n2.《电子技术基础数字部分》第7版.康华光主编.高等教育出版社."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 339.0,
            "max": 425,
            "min": 298,
            "score_line": 298,
            "planned": 17,
            "actual": 23,
            "retake_count": 27,
            "ratio": 1.2,
            "note": null,
            "retake_code": "820.0",
            "retake_content": "复试科目：纯面试（电子技术基础+英语听力与口语测试）\n参考书目：\n1.《电子技术基础模拟部分》第7版.康华光主编.高等教育出版社；\n2.《电子技术基础数字部分》第7版.康华光主编.高等教育出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 346.0,
            "max": 413,
            "min": 313,
            "score_line": 306,
            "planned": 17,
            "actual": 23,
            "retake_count": 27,
            "ratio": 1.2,
            "note": null,
            "retake_code": "820.0",
            "retake_content": "复试科目：纯面试（电子技术基础+英语听力与口语测试）\n参考书目：\n1.《电子技术基础模拟部分》第7版.康华光主编.高等教育出版社；\n2.《电子技术基础数字部分》第7版.康华光主编.高等教育出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 324.3,
      "max": 425,
      "min": 285,
      "min_line": 254,
      "max_line": 306,
      "planned_total": 57,
      "actual_total": 48,
      "retake_people_total": 56
    },
    "retake_subjects": "复试科目：纯面试（电子技术基础+英语听力与口语测试）\n参考书目：\n1.《电子技术基础模拟部分》第7版.康华光主编.高等教育出版社；\n2.《电子技术基础数字部分》第7版.康华光主编.高等教育出版社."
  },
  "宁波大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 352.0,
            "max": 399,
            "min": 312,
            "score_line": 302,
            "planned": 36,
            "actual": 36,
            "retake_count": 43,
            "ratio": 1.2,
            "note": null,
            "retake_code": "829.0",
            "retake_content": "复试科目为数字信号处理。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 404.0,
            "max": 440,
            "min": 378,
            "score_line": 277,
            "planned": 69,
            "actual": 69,
            "retake_count": 94,
            "ratio": 1.4,
            "note": null,
            "retake_code": "829.0",
            "retake_content": "复试科目为数字信号处理。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 378.0,
      "max": 440,
      "min": 312,
      "min_line": 277,
      "max_line": 302,
      "planned_total": 105,
      "actual_total": 105,
      "retake_people_total": 137
    },
    "retake_subjects": "复试科目为数字信号处理。"
  },
  "安徽大学": {
    "colleges": [
      {
        "name": "人工智能学院",
        "majors": [
          {
            "name": "140500（学）智能科学与技术",
            "avg": 321.0,
            "max": 383,
            "min": 282,
            "score_line": 266,
            "planned": 36,
            "actual": 21,
            "retake_count": 24,
            "ratio": 1.1,
            "note": null,
            "retake_code": "827.0",
            "retake_content": "复试科目：F69高级语言程序设计（C++、Python）\n参考书目：官网未给出具体的参考书目"
          }
        ]
      },
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 329.8,
            "max": 416,
            "min": 284,
            "score_line": 278,
            "planned": 42,
            "actual": 51,
            "retake_count": 62,
            "ratio": 1.2,
            "note": null,
            "retake_code": "830.0",
            "retake_content": "复试科目：F50专业基础综合二（电子线路、数字信号处理）\n参考书目：官网未给出具体的参考书目；复试科目：F51专业基础综合三（数字信号处理、通信原理）\n参考书目：官网未给出具体的参考书目；复试科目：F54专业基础综合四（数字信号处理、C语言程序设计）\n参考书目：官网未给出具体的参考书目"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 333.5,
            "max": 398,
            "min": 298,
            "score_line": 298,
            "planned": 46,
            "actual": 52,
            "retake_count": 64,
            "ratio": 1.2,
            "note": null,
            "retake_code": "830.0",
            "retake_content": "复试科目：F50专业基础综合二（电子线路、数字信号处理）\n参考书目：官网未给出具体的参考书目；复试科目：F51专业基础综合三（数字信号处理、通信原理）\n参考书目：官网未给出具体的参考书目；复试科目：F54专业基础综合四（数字信号处理、C语言程序设计）\n参考书目：官网未给出具体的参考书目"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 336.2,
            "max": 401,
            "min": 292,
            "score_line": 291,
            "planned": 176,
            "actual": 225,
            "retake_count": 272,
            "ratio": 1.2,
            "note": null,
            "retake_code": "830.0",
            "retake_content": "复试科目：F50专业基础综合二（电子线路、数字信号处理）\n参考书目：官网未给出具体的参考书目；复试科目：F51专业基础综合三（数字信号处理、通信原理）\n参考书目：官网未给出具体的参考书目；复试科目：F54专业基础综合四（数字信号处理、C语言程序设计）\n参考书目：官网未给出具体的参考书目"
          }
        ]
      },
      {
        "name": "集成电路学院",
        "majors": [
          {
            "name": "085403（专）集成电路工程",
            "avg": 323.0,
            "max": 401,
            "min": 289,
            "score_line": 286,
            "planned": 109,
            "actual": 116,
            "retake_count": 140,
            "ratio": 1.2,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "复试科目：F52专业基础综合四（集成电路原理、半导体物理与器件）\n参考书目：官网未给出具体的参考书目"
          }
        ]
      }
    ],
    "summary": {
      "avg": 328.7,
      "max": 416,
      "min": 282,
      "min_line": 266,
      "max_line": 298,
      "planned_total": 409,
      "actual_total": 465,
      "retake_people_total": 562
    },
    "retake_subjects": "复试科目：F50专业基础综合二（电子线路、数字信号处理）\n参考书目：官网未给出具体的参考书目；复试科目：F51专业基础综合三（数字信号处理、通信原理）\n参考书目：官网未给出具体的参考书目；复试科目：F54专业基础综合四（数字信号处理、C语言程序设计）\n参考书目：官网未给出具体的参考书目；复试科目：F69高级语言程序设计（C++、Python）\n参考书目：官网未给出具体的参考书目；复试科目：F52专业基础综合四（集成电路原理、半导体物理与器件）\n参考书目：官网未给出具体的参考书目"
  },
  "安徽工程大学": {
    "colleges": [
      {
        "name": "集成电路学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 351.0,
            "max": 392,
            "min": 324,
            "score_line": 264,
            "planned": 29,
            "actual": 40,
            "retake_count": 48,
            "ratio": 1.2,
            "note": null,
            "retake_code": "813.0",
            "retake_content": "数字信号处理，参考书目：《数字信号处理》（第五版），高西全，丁玉美编，西安；西安电子科技大学出版社，2022"
          }
        ]
      }
    ],
    "summary": {
      "avg": 351.0,
      "max": 392,
      "min": 324,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 29,
      "actual_total": 40,
      "retake_people_total": 48
    },
    "retake_subjects": "数字信号处理，参考书目：《数字信号处理》（第五版），高西全，丁玉美编，西安；西安电子科技大学出版社，2022"
  },
  "山东大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 370.0,
            "max": 401,
            "min": 333,
            "score_line": 323,
            "planned": 13,
            "actual": 16,
            "retake_count": 18,
            "ratio": 1.0,
            "note": null,
            "retake_code": "833.0",
            "retake_content": "笔试：通信原理\n面试：英语口语、专业综合知识及实践技能                                         \n参考教材：                                       \n1.《通信原理》第6版.樊昌信.国防工业出版社.2006.\n2.《通信系统工程》第2版.电子工业出版社.2005."
          }
        ]
      }
    ],
    "summary": {
      "avg": 370.0,
      "max": 401,
      "min": 333,
      "min_line": 323,
      "max_line": 323,
      "planned_total": 13,
      "actual_total": 16,
      "retake_people_total": 18
    },
    "retake_subjects": "笔试：通信原理\n面试：英语口语、专业综合知识及实践技能                                         \n参考教材：                                       \n1.《通信原理》第6版.樊昌信.国防工业出版社.2006.\n2.《通信系统工程》第2版.电子工业出版社.2005."
  },
  "山东科技大学": {
    "colleges": [
      {
        "name": "卓越工程师学院",
        "majors": [
          {
            "name": "085400（专）电子信息（01方向）",
            "avg": 314.9,
            "max": 379,
            "min": 286,
            "score_line": 264,
            "planned": 20,
            "actual": 8,
            "retake_count": 8,
            "ratio": 1.0,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "数字信号处理 \n参考教材：《数字信号处理》（第四版）.高西全.丁玉美编著.西安电子科技大学出版社.2019年版."
          }
        ]
      },
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 311.0,
            "max": 348,
            "min": 265,
            "score_line": 264,
            "planned": 28,
            "actual": 7,
            "retake_count": 7,
            "ratio": 1.0,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "数字信号处理                                \n参考教材：《数字信号处理》（第四版）.高西全.丁玉美编著.西安电子科技大学出版社.2019年版.；电子技术\n参考教材： ①《模拟电子技术基础》（第六版）.高等教育出版社.童诗白.华成英编.2023.\n②《数字电子技术基础》（第六版）.阎石著.高等教育出版社.2016."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 368.0,
            "max": 427,
            "min": 333,
            "score_line": 320,
            "planned": 62,
            "actual": 76,
            "retake_count": 107,
            "ratio": 1.4,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "数字信号处理                                \n参考教材：《数字信号处理》（第四版）.高西全.丁玉美编著.西安电子科技大学出版社.2019年版.；电子技术\n参考教材： ①《模拟电子技术基础》（第六版）.高等教育出版社.童诗白.华成英编.2023.\n②《数字电子技术基础》（第六版）.阎石著.高等教育出版社.2016."
          },
          {
            "name": "140100（专）集成电路科学与工程",
            "avg": 310.0,
            "max": 326,
            "min": 292,
            "score_line": 264,
            "planned": 15,
            "actual": 5,
            "retake_count": 5,
            "ratio": 1.0,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "数字信号处理                                \n参考教材：《数字信号处理》（第四版）.高西全.丁玉美编著.西安电子科技大学出版社.2019年版.；电子技术\n参考教材： ①《模拟电子技术基础》（第六版）.高等教育出版社.童诗白.华成英编.2023.\n②《数字电子技术基础》（第六版）.阎石著.高等教育出版社.2016."
          }
        ]
      }
    ],
    "summary": {
      "avg": 326.0,
      "max": 427,
      "min": 265,
      "min_line": 264,
      "max_line": 320,
      "planned_total": 125,
      "actual_total": 96,
      "retake_people_total": 127
    },
    "retake_subjects": "数字信号处理                                \n参考教材：《数字信号处理》（第四版）.高西全.丁玉美编著.西安电子科技大学出版社.2019年版.；电子技术\n参考教材： ①《模拟电子技术基础》（第六版）.高等教育出版社.童诗白.华成英编.2023.\n②《数字电子技术基础》（第六版）.阎石著.高等教育出版社.2016.；数字信号处理 \n参考教材：《数字信号处理》（第四版）.高西全.丁玉美编著.西安电子科技大学出版社.2019年版."
  },
  "山西大学": {
    "colleges": [
      {
        "name": "物理电子工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 305.0,
            "max": 344,
            "min": 272,
            "score_line": 264,
            "planned": 13,
            "actual": 13,
            "retake_count": 14,
            "ratio": 1.1,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "现场复试，复试科目通信原理"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 312.0,
            "max": 380,
            "min": 268,
            "score_line": 268,
            "planned": 77,
            "actual": 34,
            "retake_count": 35,
            "ratio": 1.0,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "现场复试，复试科目通信原理"
          }
        ]
      },
      {
        "name": "物理电子工程学院（大同）",
        "majors": [
          {
            "name": "085402（专）通信工程",
            "avg": 310.0,
            "max": 310,
            "min": 310,
            "score_line": 310,
            "planned": 10,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "841.0",
            "retake_content": "现场复试，复试科目通信原理"
          }
        ]
      }
    ],
    "summary": {
      "avg": 309.0,
      "max": 380,
      "min": 268,
      "min_line": 264,
      "max_line": 310,
      "planned_total": 100,
      "actual_total": 48,
      "retake_people_total": 50
    },
    "retake_subjects": "现场复试，复试科目通信原理"
  },
  "广东工业大学": {
    "colleges": [
      {
        "name": "信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 341.0,
            "max": 399,
            "min": 275,
            "score_line": 264,
            "planned": 42,
            "actual": 42,
            "retake_count": 60,
            "ratio": 1.4,
            "note": null,
            "retake_code": "809.0",
            "retake_content": "专业知识考核科目：通信原理、C语言程序设计。  \n参考书目：1.《现代通信原理与技术》第5版.张辉,曹丽娜等.西安电子科技大学出版社.2023.\n2.《现代通信原理》第2版.韩国军.科学出版社.2023.                                   \n3.《C语言程序设计》第5版.谭浩强.清华大学出版社.2017."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 389.0,
            "max": 445,
            "min": 342,
            "score_line": 342,
            "planned": 180,
            "actual": 176,
            "retake_count": 322,
            "ratio": 1.8,
            "note": null,
            "retake_code": "809.0",
            "retake_content": "专业知识考核科目：通信原理、C语言程序设计。  \n参考书目：1.《现代通信原理与技术》第5版.张辉,曹丽娜等.西安电子科技大学出版社.2023.\n2.《现代通信原理》第2版.韩国军.科学出版社.2023.                                   \n3.《C语言程序设计》第5版.谭浩强.清华大学出版社.2017."
          }
        ]
      },
      {
        "name": "自动化学院",
        "majors": [
          {
            "name": "085410（专）人工智能",
            "avg": 365.0,
            "max": 424,
            "min": 301,
            "score_line": 301,
            "planned": 70,
            "actual": 74,
            "retake_count": 101,
            "ratio": 1.4,
            "note": null,
            "retake_code": "809.0",
            "retake_content": "复试科目：电路理论、自控原理、信号与系统（考生任选一门复试科目，但须为初试未选考科目）   \n参考书目：1.《电路》第5版.邱关源,罗先觉.高等教育出版社.2006.  \n2.《工程控制原理（经典部分）》章云.机械工业出版社.2022.\n3.《自动控制原理》第6版.胡寿松.科学出版社.2013.                                          \n4.《信号与系统》第5版.郑君里,应启珩,杨为理.高等教育出版社.2000.\n5.《信号与系统》第2版.陈后金.清华和北方交大出版社.2005.\n6.《信号与线性系统分析》第5版.吴大正等.高等教育出版社.2019."
          }
        ]
      }
    ],
    "summary": {
      "avg": 365.0,
      "max": 445,
      "min": 275,
      "min_line": 264,
      "max_line": 342,
      "planned_total": 292,
      "actual_total": 292,
      "retake_people_total": 483
    },
    "retake_subjects": "专业知识考核科目：通信原理、C语言程序设计。  \n参考书目：1.《现代通信原理与技术》第5版.张辉,曹丽娜等.西安电子科技大学出版社.2023.\n2.《现代通信原理》第2版.韩国军.科学出版社.2023.                                   \n3.《C语言程序设计》第5版.谭浩强.清华大学出版社.2017.；复试科目：电路理论、自控原理、信号与系统（考生任选一门复试科目，但须为初试未选考科目）   \n参考书目：1.《电路》第5版.邱关源,罗先觉.高等教育出版社.2006.  \n2.《工程控制原理（经典部分）》章云.机械工业出版社.2022.\n3.《自动控制原理》第6版.胡寿松.科学出版社.2013.                                          \n4.《信号与系统》第5版.郑君里,应启珩,杨为理.高等教育出版社.2000.\n5.《信号与系统》第2版.陈后金.清华和北方交大出版社.2005.\n6.《信号与线性系统分析》第5版.吴大正等.高等教育出版社.2019."
  },
  "广州大学": {
    "colleges": [
      {
        "name": "电子与通信工程学院",
        "majors": [
          {
            "name": "081001（学）通信与信息系统",
            "avg": 322.8,
            "max": 358,
            "min": 278,
            "score_line": 264,
            "planned": 16,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "通信原理\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；数字信号处理或模拟CMOS集成电路设计（二选一）\n参考书目：\n高西全、丁玉美 . 数字信号处理原理、实现及应用（第3版）. 电子工业出版社，2016\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版，前三章). 西安交通大学出版社；数字信号处理\n参考书目：\n高西全、丁玉美. 数字信号处理原理、实现及应用（第3版），电子工业出版社，2016;；通信原理；\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；模拟CMOS集成电路设计\n参考书目：\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版), 西安交通大学出版社（前三章）"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 361.8,
            "max": 420,
            "min": 308,
            "score_line": 300,
            "planned": 82,
            "actual": 18,
            "retake_count": 25,
            "ratio": 1.4,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "通信原理\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；数字信号处理或模拟CMOS集成电路设计（二选一）\n参考书目：\n高西全、丁玉美 . 数字信号处理原理、实现及应用（第3版）. 电子工业出版社，2016\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版，前三章). 西安交通大学出版社；数字信号处理\n参考书目：\n高西全、丁玉美. 数字信号处理原理、实现及应用（第3版），电子工业出版社，2016;；通信原理；\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；模拟CMOS集成电路设计\n参考书目：\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版), 西安交通大学出版社（前三章）"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 369.6,
            "max": 433,
            "min": 308,
            "score_line": 300,
            "planned": 82,
            "actual": 51,
            "retake_count": 68,
            "ratio": 1.3,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "通信原理\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；数字信号处理或模拟CMOS集成电路设计（二选一）\n参考书目：\n高西全、丁玉美 . 数字信号处理原理、实现及应用（第3版）. 电子工业出版社，2016\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版，前三章). 西安交通大学出版社；数字信号处理\n参考书目：\n高西全、丁玉美. 数字信号处理原理、实现及应用（第3版），电子工业出版社，2016;；通信原理；\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；模拟CMOS集成电路设计\n参考书目：\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版), 西安交通大学出版社（前三章）"
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 330.5,
            "max": 396,
            "min": 274,
            "score_line": 264,
            "planned": 82,
            "actual": 16,
            "retake_count": 16,
            "ratio": 1.0,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "通信原理\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；数字信号处理或模拟CMOS集成电路设计（二选一）\n参考书目：\n高西全、丁玉美 . 数字信号处理原理、实现及应用（第3版）. 电子工业出版社，2016\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版，前三章). 西安交通大学出版社；数字信号处理\n参考书目：\n高西全、丁玉美. 数字信号处理原理、实现及应用（第3版），电子工业出版社，2016;；通信原理；\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；模拟CMOS集成电路设计\n参考书目：\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版), 西安交通大学出版社（前三章）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 346.2,
      "max": 433,
      "min": 274,
      "min_line": 264,
      "max_line": 300,
      "planned_total": 262,
      "actual_total": 91,
      "retake_people_total": 115
    },
    "retake_subjects": "通信原理\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；数字信号处理或模拟CMOS集成电路设计（二选一）\n参考书目：\n高西全、丁玉美 . 数字信号处理原理、实现及应用（第3版）. 电子工业出版社，2016\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版，前三章). 西安交通大学出版社；数字信号处理\n参考书目：\n高西全、丁玉美. 数字信号处理原理、实现及应用（第3版），电子工业出版社，2016;；通信原理；\n参考书目：\n李晓峰，周宁，周亮, 等. 通信原理（第2版），清华大学出版社，2014；模拟CMOS集成电路设计\n参考书目：\n(美)毕查德·拉扎维(Behzad Razavi) 著，陈贵灿等译. 模拟CMOS集成电路设计(第二版), 西安交通大学出版社（前三章）"
  },
  "广西大学": {
    "colleges": [
      {
        "name": "计算机与电子信息学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 284.0,
            "max": 307,
            "min": 255,
            "score_line": 254,
            "planned": 13,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "816.0",
            "retake_content": "笔试科目：通信原理（专业基础能力考核）      参考书目：官方未提供指定参考书目"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 321.0,
            "max": 373,
            "min": 281,
            "score_line": 254,
            "planned": 28,
            "actual": 29,
            "retake_count": 35,
            "ratio": 1.2,
            "note": null,
            "retake_code": "816.0",
            "retake_content": "笔试科目：通信原理（专业基础能力考核）      参考书目：官方未提供指定参考书目"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 316.0,
            "max": 373,
            "min": 254,
            "score_line": 254,
            "planned": 36,
            "actual": 29,
            "retake_count": 35,
            "ratio": 1.2,
            "note": null,
            "retake_code": "816.0",
            "retake_content": "笔试科目：通信原理（专业基础能力考核）      参考书目：官方未提供指定参考书目"
          }
        ]
      }
    ],
    "summary": {
      "avg": 307.0,
      "max": 373,
      "min": 254,
      "min_line": 254,
      "max_line": 254,
      "planned_total": 77,
      "actual_total": 64,
      "retake_people_total": 76
    },
    "retake_subjects": "笔试科目：通信原理（专业基础能力考核）      参考书目：官方未提供指定参考书目"
  },
  "成都信息工程大学": {
    "colleges": [
      {
        "name": "电子工程学院",
        "majors": [
          {
            "name": "081002（学）信号与信息处理",
            "avg": 316.0,
            "max": 364,
            "min": 281,
            "score_line": 264,
            "planned": 25,
            "actual": 16,
            "retake_count": 16,
            "ratio": 1.0,
            "note": null,
            "retake_code": "803.0",
            "retake_content": "模拟电子技术综合一：模电+电路\n参考教材：《电路分析基础》第二版，巨辉、周蓉\n《电路分析基础》第五版，李瀚荪\n《模拟电子技术基础》杨明欣\n《模拟电子技术基础》第四版，童诗白、华成英"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 379.0,
            "max": 428,
            "min": 348,
            "score_line": 310,
            "planned": 64,
            "actual": 83,
            "retake_count": 140,
            "ratio": 1.7,
            "note": null,
            "retake_code": "803.0",
            "retake_content": "模拟电子技术综合一：模电+电路\n参考教材：《电路分析基础》第二版，巨辉、周蓉\n《电路分析基础》第五版，李瀚荪\n《模拟电子技术基础》杨明欣\n《模拟电子技术基础》第四版，童诗白、华成英"
          }
        ]
      },
      {
        "name": "联合培养专项—高原院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 388.0,
            "max": 388,
            "min": 387,
            "score_line": 264,
            "planned": 6,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "803.0",
            "retake_content": "模拟电子技术综合一：模电+电路\n参考教材：《电路分析基础》第二版，巨辉、周蓉\n《电路分析基础》第五版，李瀚荪\n《模拟电子技术基础》杨明欣\n《模拟电子技术基础》第四版，童诗白、华成英"
          }
        ]
      },
      {
        "name": "通信工程学院",
        "majors": [
          {
            "name": "081001（学）通信与信息系统",
            "avg": 295.0,
            "max": 348,
            "min": 268,
            "score_line": 264,
            "planned": 15,
            "actual": 13,
            "retake_count": 13,
            "ratio": 1.0,
            "note": null,
            "retake_code": "803.0",
            "retake_content": "模拟电子技术综合二：模电+电路\n参考教材：《电路分析基础》第三版 李翰逊编著 \n《电路分析基础》 第二版 巨辉、周蓉编著 \n《模拟电子技术基础》第二版 王建波 \n《模拟电子技术基础》 杨明欣"
          },
          {
            "name": "0810Z1（学）电子微系统工程",
            "avg": 347.0,
            "max": 347,
            "min": 347,
            "score_line": 264,
            "planned": 4,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "803.0",
            "retake_content": "模拟电子技术综合二：模电+电路\n参考教材：《电路分析基础》第三版 李翰逊编著 \n《电路分析基础》 第二版 巨辉、周蓉编著 \n《模拟电子技术基础》第二版 王建波 \n《模拟电子技术基础》 杨明欣"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 362.0,
            "max": 421,
            "min": 323,
            "score_line": 310,
            "planned": 56,
            "actual": 56,
            "retake_count": 82,
            "ratio": 1.5,
            "note": null,
            "retake_code": "803.0",
            "retake_content": "模拟电子技术综合二：模电+电路\n参考教材：《电路分析基础》第三版 李翰逊编著 \n《电路分析基础》 第二版 巨辉、周蓉编著 \n《模拟电子技术基础》第二版 王建波 \n《模拟电子技术基础》 杨明欣"
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 334.0,
            "max": 408,
            "min": 294,
            "score_line": 264,
            "planned": 13,
            "actual": 18,
            "retake_count": 23,
            "ratio": 1.3,
            "note": null,
            "retake_code": "803.0",
            "retake_content": "模拟电子技术综合二：模电+电路\n参考教材：《电路分析基础》第三版 李翰逊编著 \n《电路分析基础》 第二版 巨辉、周蓉编著 \n《模拟电子技术基础》第二版 王建波 \n《模拟电子技术基础》 杨明欣"
          }
        ]
      }
    ],
    "summary": {
      "avg": 345.9,
      "max": 428,
      "min": 268,
      "min_line": 264,
      "max_line": 310,
      "planned_total": 183,
      "actual_total": 189,
      "retake_people_total": 277
    },
    "retake_subjects": "模拟电子技术综合一：模电+电路\n参考教材：《电路分析基础》第二版，巨辉、周蓉\n《电路分析基础》第五版，李瀚荪\n《模拟电子技术基础》杨明欣\n《模拟电子技术基础》第四版，童诗白、华成英；模拟电子技术综合二：模电+电路\n参考教材：《电路分析基础》第三版 李翰逊编著 \n《电路分析基础》 第二版 巨辉、周蓉编著 \n《模拟电子技术基础》第二版 王建波 \n《模拟电子技术基础》 杨明欣"
  },
  "成都理工大学": {
    "colleges": [
      {
        "name": "机电工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 323.0,
            "max": 361,
            "min": 283,
            "score_line": 264,
            "planned": 18,
            "actual": 23,
            "retake_count": 34,
            "ratio": 1.5,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "复试科目（笔试）：通信原理；同等学力加试：数字信号处理、单片机原理与应用；复试科目（笔试）：电子电路基础；同等学力加试：通信原理、单片机原理与应用；复试科目（笔试）：通信原理；同等学力加试：计算机通信与网络、数字信号处理"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 355.0,
            "max": 410,
            "min": 309,
            "score_line": 309,
            "planned": 24,
            "actual": 50,
            "retake_count": 73,
            "ratio": 1.5,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "复试科目（笔试）：通信原理；同等学力加试：数字信号处理、单片机原理与应用；复试科目（笔试）：电子电路基础；同等学力加试：通信原理、单片机原理与应用；复试科目（笔试）：通信原理；同等学力加试：计算机通信与网络、数字信号处理"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 357.0,
            "max": 409,
            "min": 326,
            "score_line": 326,
            "planned": 22,
            "actual": 28,
            "retake_count": 42,
            "ratio": 1.5,
            "note": null,
            "retake_code": "826.0",
            "retake_content": "复试科目（笔试）：通信原理；同等学力加试：数字信号处理、单片机原理与应用；复试科目（笔试）：电子电路基础；同等学力加试：通信原理、单片机原理与应用；复试科目（笔试）：通信原理；同等学力加试：计算机通信与网络、数字信号处理"
          }
        ]
      }
    ],
    "summary": {
      "avg": 345.0,
      "max": 410,
      "min": 283,
      "min_line": 264,
      "max_line": 326,
      "planned_total": 64,
      "actual_total": 101,
      "retake_people_total": 149
    },
    "retake_subjects": "复试科目（笔试）：通信原理；同等学力加试：数字信号处理、单片机原理与应用；复试科目（笔试）：电子电路基础；同等学力加试：通信原理、单片机原理与应用；复试科目（笔试）：通信原理；同等学力加试：计算机通信与网络、数字信号处理"
  },
  "新疆大学": {
    "colleges": [
      {
        "name": "计算机科学与技术学院（网络空间安全学院）",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 302.0,
            "max": 363,
            "min": 256,
            "score_line": 254,
            "planned": 23,
            "actual": 21,
            "retake_count": 23,
            "ratio": 1.1,
            "note": null,
            "retake_code": "827.0",
            "retake_content": "通信原理（线上面试）\n参考书目：《通信原理教程》第3版.樊昌信编著.电子工业出版社.2012."
          },
          {
            "name": "085401（专）新一代电子信息技术（含量子技术等）",
            "avg": 348.8,
            "max": 415,
            "min": 293,
            "score_line": 292,
            "planned": 101,
            "actual": 109,
            "retake_count": 153,
            "ratio": 1.4,
            "note": null,
            "retake_code": "827.0",
            "retake_content": "通信原理（线上面试）\n参考书目：《通信原理教程》第3版.樊昌信编著.电子工业出版社.2012."
          }
        ]
      }
    ],
    "summary": {
      "avg": 325.4,
      "max": 415,
      "min": 256,
      "min_line": 254,
      "max_line": 292,
      "planned_total": 124,
      "actual_total": 130,
      "retake_people_total": 176
    },
    "retake_subjects": "通信原理（线上面试）\n参考书目：《通信原理教程》第3版.樊昌信编著.电子工业出版社.2012."
  },
  "杭州电子科技大学": {
    "colleges": [
      {
        "name": "电子信息中外合作教育中心",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 339.0,
            "max": 383,
            "min": 281,
            "score_line": 274,
            "planned": 18,
            "actual": 4,
            "retake_count": 5,
            "ratio": 1.2,
            "note": null,
            "retake_code": "845.0",
            "retake_content": "模拟电路、数字电路、电磁场与电磁波（官方未指定参考书目）"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 313.0,
            "max": 354,
            "min": 294,
            "score_line": 294,
            "planned": 18,
            "actual": 9,
            "retake_count": 9,
            "ratio": 1.0,
            "note": null,
            "retake_code": "845.0",
            "retake_content": "模拟电路、数字电路、电磁场与电磁波（官方未指定参考书目）"
          }
        ]
      },
      {
        "name": "电子信息学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 337.0,
            "max": 420,
            "min": 280,
            "score_line": 264,
            "planned": 78,
            "actual": 94,
            "retake_count": 121,
            "ratio": 1.3,
            "note": null,
            "retake_code": "845.0",
            "retake_content": "模拟电路、数字电路、电磁场与电磁波（官方未指定参考书目）"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 366.0,
            "max": 426,
            "min": 321,
            "score_line": 293,
            "planned": 162,
            "actual": 239,
            "retake_count": 292,
            "ratio": 1.2,
            "note": null,
            "retake_code": "845.0",
            "retake_content": "模拟电路、数字电路、电磁场与电磁波（官方未指定参考书目）"
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 347.0,
            "max": 421,
            "min": 291,
            "score_line": 272,
            "planned": 107,
            "actual": 131,
            "retake_count": 190,
            "ratio": 1.4,
            "note": null,
            "retake_code": "845.0",
            "retake_content": "模拟电路、数字电路、电磁场与电磁波（官方未指定参考书目）"
          },
          {
            "name": "140100（学）集成电路科学与工程",
            "avg": 312.0,
            "max": 358,
            "min": 277,
            "score_line": 277,
            "planned": 16,
            "actual": 9,
            "retake_count": 9,
            "ratio": 1.0,
            "note": null,
            "retake_code": "845.0",
            "retake_content": "模拟电路、数字电路、电磁场与电磁波（官方未指定参考书目）"
          }
        ]
      },
      {
        "name": "通信工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 339.0,
            "max": 418,
            "min": 285,
            "score_line": 282,
            "planned": 56,
            "actual": 66,
            "retake_count": 87,
            "ratio": 1.3,
            "note": null,
            "retake_code": "843.0",
            "retake_content": "《通信原理》、《电路分析》相关课程的基础知识，着重于考核考生的专业基础知识及应用（官方未指定参考书目）"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 363.0,
            "max": 416,
            "min": 315,
            "score_line": 279,
            "planned": 150,
            "actual": 185,
            "retake_count": 250,
            "ratio": 1.4,
            "note": null,
            "retake_code": "843.0",
            "retake_content": "《通信原理》、《电路分析》相关课程的基础知识，着重于考核考生的专业基础知识及应用（官方未指定参考书目）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 339.5,
      "max": 426,
      "min": 277,
      "min_line": 264,
      "max_line": 294,
      "planned_total": 605,
      "actual_total": 737,
      "retake_people_total": 963
    },
    "retake_subjects": "模拟电路、数字电路、电磁场与电磁波（官方未指定参考书目）；《通信原理》、《电路分析》相关课程的基础知识，着重于考核考生的专业基础知识及应用（官方未指定参考书目）"
  },
  "桂林电子科技大学": {
    "colleges": [
      {
        "name": "信息与通信学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 291.6,
            "max": 340,
            "min": 264,
            "score_line": 254,
            "planned": 44,
            "actual": 7,
            "retake_count": 8,
            "ratio": 1.1,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；B03通信原理/B04数字信号处理\n参考教材：1.《通信原理》第七版.樊昌信等.国防工业出版社.2012；2.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B02半导体物理/B05材料现代分析方法\n参考教材：1.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；2.《材料分析方法》第4版.周玉,机械工业出版社.2020;3.《仪器分析教程》第3版.张新祥等著.北京大学出版社.2022.；B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020."
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 306.4,
            "max": 358,
            "min": 261,
            "score_line": 254,
            "planned": 92,
            "actual": 25,
            "retake_count": 29,
            "ratio": 1.2,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；B03通信原理/B04数字信号处理\n参考教材：1.《通信原理》第七版.樊昌信等.国防工业出版社.2012；2.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B02半导体物理/B05材料现代分析方法\n参考教材：1.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；2.《材料分析方法》第4版.周玉,机械工业出版社.2020;3.《仪器分析教程》第3版.张新祥等著.北京大学出版社.2022.；B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020."
          },
          {
            "name": "140100（学）集成电路科学与工程",
            "avg": 318.5,
            "max": 335,
            "min": 297,
            "score_line": 254,
            "planned": 20,
            "actual": 4,
            "retake_count": 4,
            "ratio": 1.0,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；B03通信原理/B04数字信号处理\n参考教材：1.《通信原理》第七版.樊昌信等.国防工业出版社.2012；2.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B02半导体物理/B05材料现代分析方法\n参考教材：1.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；2.《材料分析方法》第4版.周玉,机械工业出版社.2020;3.《仪器分析教程》第3版.张新祥等著.北京大学出版社.2022.；B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 336.0,
            "max": 427,
            "min": 255,
            "score_line": 254,
            "planned": 128,
            "actual": 127,
            "retake_count": 217,
            "ratio": 1.7,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；B03通信原理/B04数字信号处理\n参考教材：1.《通信原理》第七版.樊昌信等.国防工业出版社.2012；2.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B02半导体物理/B05材料现代分析方法\n参考教材：1.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；2.《材料分析方法》第4版.周玉,机械工业出版社.2020;3.《仪器分析教程》第3版.张新祥等著.北京大学出版社.2022.；B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 333.0,
            "max": 407,
            "min": 279,
            "score_line": 254,
            "planned": 40,
            "actual": 24,
            "retake_count": 33,
            "ratio": 1.4,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；B03通信原理/B04数字信号处理\n参考教材：1.《通信原理》第七版.樊昌信等.国防工业出版社.2012；2.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B02半导体物理/B05材料现代分析方法\n参考教材：1.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；2.《材料分析方法》第4版.周玉,机械工业出版社.2020;3.《仪器分析教程》第3版.张新祥等著.北京大学出版社.2022.；B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020."
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 324.7,
            "max": 384,
            "min": 260,
            "score_line": 254,
            "planned": 25,
            "actual": 16,
            "retake_count": 28,
            "ratio": 1.8,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；B03通信原理/B04数字信号处理\n参考教材：1.《通信原理》第七版.樊昌信等.国防工业出版社.2012；2.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B02半导体物理/B05材料现代分析方法\n参考教材：1.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；2.《材料分析方法》第4版.周玉,机械工业出版社.2020;3.《仪器分析教程》第3版.张新祥等著.北京大学出版社.2022.；B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020."
          }
        ]
      },
      {
        "name": "南宁研究院",
        "majors": [
          {
            "name": "085402（专）通信工程",
            "avg": 329.1,
            "max": 413,
            "min": 265,
            "score_line": 254,
            "planned": 26,
            "actual": 13,
            "retake_count": 15,
            "ratio": 1.1,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023."
          },
          {
            "name": "085403（专）集成电路工程",
            "avg": 316.3,
            "max": 349,
            "min": 261,
            "score_line": 254,
            "planned": 11,
            "actual": 3,
            "retake_count": 4,
            "ratio": 1.3,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023."
          }
        ]
      },
      {
        "name": "电子工程与自动化学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 315.0,
            "max": 370,
            "min": 270,
            "score_line": 254,
            "planned": 23,
            "actual": 8,
            "retake_count": 13,
            "ratio": 1.6,
            "note": null,
            "retake_code": "806.0",
            "retake_content": "H01控制专业综合/H02电子测量技术/H04计算机网络技术/H05单片机原理及接口技术\nH01参考教材：1.《自动化仪表与过程控制》第六版.施仁,电子工业出版社.2018;2.《微型计算机控制技术》第四版.于海生.清华大学出版社.2024;\nH02参考教材：《电子测量与仪器（第5版）》.郭庆等.电子工业出版社.2020；\nH04参考教材：1.《计算机网络》第六版.AndrewS,Tanenbaum等著.严伟,潘爱民译.清华大\n学出版社.2022;2.《计算机网络》第八版.谢希仁著.电子工业出版社.2021;\nH05参考教材：《单片微型计算机与接口技术》第五版.李群芳.电子工业出版社.2015."
          }
        ]
      }
    ],
    "summary": {
      "avg": 319.0,
      "max": 427,
      "min": 255,
      "min_line": 254,
      "max_line": 254,
      "planned_total": 409,
      "actual_total": 227,
      "retake_people_total": 351
    },
    "retake_subjects": "B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；B03通信原理/B04数字信号处理\n参考教材：1.《通信原理》第七版.樊昌信等.国防工业出版社.2012；2.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B02半导体物理/B05材料现代分析方法\n参考教材：1.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023.；2.《材料分析方法》第4版.周玉,机械工业出版社.2020;3.《仪器分析教程》第3版.张新祥等著.北京大学出版社.2022.；B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；H01控制专业综合/H02电子测量技术/H04计算机网络技术/H05单片机原理及接口技术\nH01参考教材：1.《自动化仪表与过程控制》第六版.施仁,电子工业出版社.2018;2.《微型计算机控制技术》第四版.于海生.清华大学出版社.2024;\nH02参考教材：《电子测量与仪器（第5版）》.郭庆等.电子工业出版社.2020；\nH04参考教材：1.《计算机网络》第六版.AndrewS,Tanenbaum等著.严伟,潘爱民译.清华大\n学出版社.2022;2.《计算机网络》第八版.谢希仁著.电子工业出版社.2021;\nH05参考教材：《单片微型计算机与接口技术》第五版.李群芳.电子工业出版社.2015.；B01电磁场与微波技术/B03通信原理/B04数字信号处理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《通信原理》第七版.樊昌信等.国防工业出版社.2012；4.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.5.《通信原理》第七版.樊昌信等.国防工业出版社.2012；6.《数字信号处理――基于计算机的方法(第四版)》.SanjitK,Mitra.电子工业出版社.2020.；B01电磁场与微波技术/B02半导体物理\n参考教材：1.《电磁场与电磁波基础》姜兴等.西安电子科技大学出版社.2022；2.《微波技术与天线》第四版.王新稳等.电子工业出版社.2016;3.《半导体物理学》第八版.刘恩科等.电子工业出版社.2023."
  },
  "武汉大学": {
    "colleges": [
      {
        "name": "测绘遥感信息工程全国重点实验室",
        "majors": [
          {
            "name": "085400(专)电子信息",
            "avg": 423.3,
            "max": 443,
            "min": 405,
            "score_line": 390,
            "planned": 4,
            "actual": 4,
            "retake_count": 8,
            "ratio": 2.0,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "数字信号处理 \n参考书籍：官方暂未公布"
          }
        ]
      },
      {
        "name": "电子信息学院",
        "majors": [
          {
            "name": "080900(学)电子科学与技术",
            "avg": 381.0,
            "max": 399,
            "min": 375,
            "score_line": 353,
            "planned": 5,
            "actual": 5,
            "retake_count": 8,
            "ratio": 1.6,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "1、线性电子线路2、数字逻辑电路                               \n参考书目：官网未公布"
          },
          {
            "name": "081000(学)信息与通信工程",
            "avg": 393.0,
            "max": 393,
            "min": 393,
            "score_line": 393,
            "planned": 1,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "1、线性电子线路2、数字逻辑电路                               \n参考书目：官网未公布"
          },
          {
            "name": "085400(专)电子信息",
            "avg": 420.0,
            "max": 447,
            "min": 392,
            "score_line": 390,
            "planned": 72,
            "actual": 57,
            "retake_count": 120,
            "ratio": 2.1,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "1、线性电子线路2、数字逻辑电路                               \n参考书目：官网未公布"
          },
          {
            "name": "085405(专)软件工程",
            "avg": 366.0,
            "max": 405,
            "min": 313,
            "score_line": 310,
            "planned": 28,
            "actual": 17,
            "retake_count": 17,
            "ratio": 1.0,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "1、线性电子线路2、数字逻辑电路                               \n参考书目：官网未公布"
          }
        ]
      },
      {
        "name": "集成电路学院",
        "majors": [
          {
            "name": "085403(专)集成电路工程",
            "avg": 356.3,
            "max": 416,
            "min": 291,
            "score_line": 290,
            "planned": 41,
            "actual": 28,
            "retake_count": 29,
            "ratio": 1.0,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "1、数字电子技术基础2、电子技术基础模拟部分3、信号与系统\n参考书目：1、《数字电子技术基础》第6版.阎石主编,高等教育出版社.\n2、《电子技术基础模拟部分》第7版.康华光主编,高等教育出版社.\n3、《信号与系统》第4版.郑君里主编,高等教育出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 389.9,
      "max": 447,
      "min": 291,
      "min_line": 290,
      "max_line": 393,
      "planned_total": 151,
      "actual_total": 112,
      "retake_people_total": 183
    },
    "retake_subjects": "1、线性电子线路2、数字逻辑电路                               \n参考书目：官网未公布；1、数字电子技术基础2、电子技术基础模拟部分3、信号与系统\n参考书目：1、《数字电子技术基础》第6版.阎石主编,高等教育出版社.\n2、《电子技术基础模拟部分》第7版.康华光主编,高等教育出版社.\n3、《信号与系统》第4版.郑君里主编,高等教育出版社.；数字信号处理 \n参考书籍：官方暂未公布"
  },
  "武汉工程大学": {
    "colleges": [
      {
        "name": "电气信息学院",
        "majors": [
          {
            "name": "081001（学）通信与信息系统",
            "avg": 274.0,
            "max": 275,
            "min": 272,
            "score_line": 264,
            "planned": 5,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "834.0",
            "retake_content": "C语言程序设计、电子技术基础（任选一门）\n参考书目：\n1.康华光，《电子技术基础模拟部分（第七版）》\n高等教育出版社\n2.康华光，《电子技术基础数字部分（第七版）》\n高等教育出版社\n3.谭浩强，《C语言程序设计教程（第4版）》\n清华大学出版社\n4.张昕，《C语言程序设计一VisualC++6.0环境\n(第二版）》，水利水电出版社"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 333.0,
            "max": 398,
            "min": 276,
            "score_line": 264,
            "planned": 30,
            "actual": 47,
            "retake_count": 72,
            "ratio": 2.5,
            "note": null,
            "retake_code": "834.0",
            "retake_content": "C语言程序设计、电子技术基础（任选一门）\n参考书目：\n1.康华光，《电子技术基础模拟部分（第七版）》\n高等教育出版社\n2.康华光，《电子技术基础数字部分（第七版）》\n高等教育出版社\n3.谭浩强，《C语言程序设计教程（第4版）》\n清华大学出版社\n4.张昕，《C语言程序设计一VisualC++6.0环境\n(第二版）》，水利水电出版社"
          }
        ]
      }
    ],
    "summary": {
      "avg": 303.5,
      "max": 398,
      "min": 272,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 35,
      "actual_total": 49,
      "retake_people_total": 74
    },
    "retake_subjects": "C语言程序设计、电子技术基础（任选一门）\n参考书目：\n1.康华光，《电子技术基础模拟部分（第七版）》\n高等教育出版社\n2.康华光，《电子技术基础数字部分（第七版）》\n高等教育出版社\n3.谭浩强，《C语言程序设计教程（第4版）》\n清华大学出版社\n4.张昕，《C语言程序设计一VisualC++6.0环境\n(第二版）》，水利水电出版社"
  },
  "武汉理工大学": {
    "colleges": [
      {
        "name": "信息工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 323.8,
            "max": 369,
            "min": 295,
            "score_line": 294,
            "planned": 5,
            "actual": 4,
            "retake_count": 5,
            "ratio": 1.2,
            "note": null,
            "retake_code": "855.0",
            "retake_content": "专业基础综合笔试（100分）+ 综合面试（100分）\n考试科目：专业基础综合\n参考书目：信号与系统、数字信号处理、通信原理、单片机与嵌入式系统、专业外语"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 388.5,
            "max": 415,
            "min": 365,
            "score_line": 362,
            "planned": 47,
            "actual": 47,
            "retake_count": 63,
            "ratio": 1.3,
            "note": null,
            "retake_code": "855.0",
            "retake_content": "专业基础综合笔试（100分）+ 综合面试（100分）\n考试科目：专业基础综合\n参考书目：信号与系统、数字信号处理、通信原理、单片机与嵌入式系统、专业外语"
          },
          {
            "name": "085400（专）电子信息（普通方向）",
            "avg": 413.9,
            "max": 452,
            "min": 392,
            "score_line": 391,
            "planned": 99,
            "actual": 99,
            "retake_count": 130,
            "ratio": 1.3,
            "note": null,
            "retake_code": "855.0",
            "retake_content": "专业基础综合笔试（100分）+ 综合面试（100分）\n考试科目：专业基础综合\n参考书目：信号与系统、数字信号处理、通信原理、单片机与嵌入式系统、专业外语"
          },
          {
            "name": "085400（专）电子信息（襄阳示范区专项）",
            "avg": 406.8,
            "max": 442,
            "min": 386,
            "score_line": 383,
            "planned": 60,
            "actual": 60,
            "retake_count": 81,
            "ratio": 1.4,
            "note": null,
            "retake_code": "855.0",
            "retake_content": "专业基础综合笔试（100分）+ 综合面试（100分）\n考试科目：专业基础综合\n参考书目：信号与系统、数字信号处理、通信原理、单片机与嵌入式系统、专业外语"
          }
        ]
      }
    ],
    "summary": {
      "avg": 383.2,
      "max": 452,
      "min": 295,
      "min_line": 294,
      "max_line": 391,
      "planned_total": 211,
      "actual_total": 210,
      "retake_people_total": 279
    },
    "retake_subjects": "专业基础综合笔试（100分）+ 综合面试（100分）\n考试科目：专业基础综合\n参考书目：信号与系统、数字信号处理、通信原理、单片机与嵌入式系统、专业外语"
  },
  "武汉科技大学": {
    "colleges": [
      {
        "name": "电子信息学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 318.0,
            "max": 388,
            "min": 269,
            "score_line": 264,
            "planned": 15,
            "actual": 11,
            "retake_count": 11,
            "ratio": 1.0,
            "note": null,
            "retake_code": "813.0",
            "retake_content": "笔试：通信原理\n参考教材：《通信原理教程》第四版.樊昌信.电子工业出版社.2019.；笔试：模拟电子技术\n参考教材：《电子技术基础》(模拟部分)第七版.康华光,张林.高等教育出版社.2021."
          },
          {
            "name": "085400（专）电子信息（02）",
            "avg": 357.0,
            "max": 415,
            "min": 323,
            "score_line": 323,
            "planned": 41,
            "actual": 54,
            "retake_count": 65,
            "ratio": 1.2,
            "note": null,
            "retake_code": "813.0",
            "retake_content": "笔试：通信原理\n参考教材：《通信原理教程》第四版.樊昌信.电子工业出版社.2019.；笔试：模拟电子技术\n参考教材：《电子技术基础》(模拟部分)第七版.康华光,张林.高等教育出版社.2021."
          },
          {
            "name": "085400（专）电子信息（03）",
            "avg": 309.0,
            "max": 353,
            "min": 273,
            "score_line": 264,
            "planned": 15,
            "actual": 9,
            "retake_count": 9,
            "ratio": 1.0,
            "note": null,
            "retake_code": "813.0",
            "retake_content": "笔试：通信原理\n参考教材：《通信原理教程》第四版.樊昌信.电子工业出版社.2019.；笔试：模拟电子技术\n参考教材：《电子技术基础》(模拟部分)第七版.康华光,张林.高等教育出版社.2021."
          }
        ]
      }
    ],
    "summary": {
      "avg": 328.0,
      "max": 415,
      "min": 269,
      "min_line": 264,
      "max_line": 323,
      "planned_total": 71,
      "actual_total": 74,
      "retake_people_total": 85
    },
    "retake_subjects": "笔试：通信原理\n参考教材：《通信原理教程》第四版.樊昌信.电子工业出版社.2019.；笔试：模拟电子技术\n参考教材：《电子技术基础》(模拟部分)第七版.康华光,张林.高等教育出版社.2021."
  },
  "江西理工大学": {
    "colleges": [
      {
        "name": "信息工程学院",
        "majors": [
          {
            "name": "085408（专）光电信息工程",
            "avg": 311.0,
            "max": 343,
            "min": 279,
            "score_line": 279,
            "planned": 7,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "参考教材：\n《C程序设计》第5版.谭浩强主编.清华大学出版社.2017."
          }
        ]
      },
      {
        "name": "理学院",
        "majors": [
          {
            "name": "080900 (学)电子科学与技术",
            "avg": 336.0,
            "max": 336,
            "min": 336,
            "score_line": 264,
            "planned": 10,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "参考教材：\n《模拟电子技术基础》第5版.童诗白,华成英.高等教育出版社.2023.；参考教材：\n《C程序设计》第5版.谭浩强主编.清华大学出版社.2017."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 340.0,
            "max": 417,
            "min": 272,
            "score_line": 265,
            "planned": 24,
            "actual": 34,
            "retake_count": 38,
            "ratio": 1.1,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "参考教材：\n《模拟电子技术基础》第5版.童诗白,华成英.高等教育出版社.2023.；参考教材：\n《C程序设计》第5版.谭浩强主编.清华大学出版社.2017."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 330.0,
            "max": 372,
            "min": 298,
            "score_line": 298,
            "planned": 4,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "参考教材：\n《模拟电子技术基础》第5版.童诗白,华成英.高等教育出版社.2023.；参考教材：\n《C程序设计》第5版.谭浩强主编.清华大学出版社.2017."
          }
        ]
      }
    ],
    "summary": {
      "avg": 329.2,
      "max": 417,
      "min": 272,
      "min_line": 264,
      "max_line": 298,
      "planned_total": 45,
      "actual_total": 43,
      "retake_people_total": 47
    },
    "retake_subjects": "参考教材：\n《模拟电子技术基础》第5版.童诗白,华成英.高等教育出版社.2023.；参考教材：\n《C程序设计》第5版.谭浩强主编.清华大学出版社.2017.；参考教材：\n《C程序设计》第5版.谭浩强主编.清华大学出版社.2017."
  },
  "沈阳工业大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 323.0,
            "max": 370,
            "min": 298,
            "score_line": 264,
            "planned": 19,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "F515信息与通信系统专业综合\n基础考核：数字信号处理、通信原理（2选1）\n综合考核：光纤通信、计算机通信网络、通信电子线路、单片机原理及应用（4选2）。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 354.0,
            "max": 402,
            "min": 280,
            "score_line": 264,
            "planned": 38,
            "actual": 35,
            "retake_count": 48,
            "ratio": 1.4,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "F515信息与通信系统专业综合\n基础考核：数字信号处理、通信原理（2选1）\n综合考核：光纤通信、计算机通信网络、通信电子线路、单片机原理及应用（4选2）。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 338.5,
      "max": 402,
      "min": 280,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 57,
      "actual_total": 41,
      "retake_people_total": 54
    },
    "retake_subjects": "F515信息与通信系统专业综合\n基础考核：数字信号处理、通信原理（2选1）\n综合考核：光纤通信、计算机通信网络、通信电子线路、单片机原理及应用（4选2）。"
  },
  "沈阳理工大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 338.0,
            "max": 383,
            "min": 271,
            "score_line": 264,
            "planned": 24,
            "actual": 15,
            "retake_count": 18,
            "ratio": 1.2,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "通信原理\n参考书目：\n《通信原理（第七版）》，国防工业出版社，樊昌信、曹丽娜\n《现代通信原理（第二版）》，西安电子科技大学出版社，赵恒凯"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 354.0,
            "max": 420,
            "min": 300,
            "score_line": 264,
            "planned": 46,
            "actual": 46,
            "retake_count": 64,
            "ratio": 1.4,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "通信原理\n参考书目：\n《通信原理（第七版）》，国防工业出版社，樊昌信、曹丽娜\n《现代通信原理（第二版）》，西安电子科技大学出版社，赵恒凯"
          }
        ]
      }
    ],
    "summary": {
      "avg": 346.0,
      "max": 420,
      "min": 271,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 70,
      "actual_total": 61,
      "retake_people_total": 82
    },
    "retake_subjects": "通信原理\n参考书目：\n《通信原理（第七版）》，国防工业出版社，樊昌信、曹丽娜\n《现代通信原理（第二版）》，西安电子科技大学出版社，赵恒凯"
  },
  "沈阳航空航天大学": {
    "colleges": [
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 310.0,
            "max": 334,
            "min": 282,
            "score_line": 264,
            "planned": 25,
            "actual": 5,
            "retake_count": 8,
            "ratio": 1.6,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "面试：微机原理\n参考教材：《单片机原理及应用》第三版.张毅刚.哈尔滨工业大学出版社."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 351.0,
            "max": 406,
            "min": 293,
            "score_line": 290,
            "planned": 65,
            "actual": 70,
            "retake_count": 102,
            "ratio": 1.5,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "面试：微机原理\n参考教材：《单片机原理及应用》第三版.张毅刚.哈尔滨工业大学出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 330.5,
      "max": 406,
      "min": 282,
      "min_line": 264,
      "max_line": 290,
      "planned_total": 90,
      "actual_total": 75,
      "retake_people_total": 110
    },
    "retake_subjects": "面试：微机原理\n参考教材：《单片机原理及应用》第三版.张毅刚.哈尔滨工业大学出版社."
  },
  "河北工程大学": {
    "colleges": [
      {
        "name": "信息与电气工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 311.0,
            "max": 349,
            "min": 277,
            "score_line": 264,
            "planned": 19,
            "actual": 9,
            "retake_count": 9,
            "ratio": 1.0,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "通信原理\n参考教材：《通信原理》（第七版），樊昌信、曹丽娜主编"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 330.0,
            "max": 362,
            "min": 290,
            "score_line": 290,
            "planned": 5,
            "actual": 10,
            "retake_count": 12,
            "ratio": 1.2,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "通信原理\n参考教材：《通信原理》（第七版），樊昌信、曹丽娜主编"
          }
        ]
      }
    ],
    "summary": {
      "avg": 320.5,
      "max": 362,
      "min": 277,
      "min_line": 264,
      "max_line": 290,
      "planned_total": 24,
      "actual_total": 19,
      "retake_people_total": 21
    },
    "retake_subjects": "通信原理\n参考教材：《通信原理》（第七版），樊昌信、曹丽娜主编"
  },
  "河北科技大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程-01",
            "avg": 264.0,
            "max": 264,
            "min": 264,
            "score_line": 264,
            "planned": 8,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "通信原理\n参考教材：《通信原理》第七版.樊昌信.国防工业出版社.；单片机原理及应用\n参考教材：\n1.《单片微型计算机原理与接口技术》第3版.高锋.北京：科学出版社.2015.\n2.《新编MCS-51单片机应用设计》第3版.张毅刚.哈尔滨：哈尔滨工业大学出版社.2008."
          },
          {
            "name": "081000（学）信息与通信工程-02",
            "avg": 294.0,
            "max": 315,
            "min": 266,
            "score_line": 264,
            "planned": 8,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "通信原理\n参考教材：《通信原理》第七版.樊昌信.国防工业出版社.；单片机原理及应用\n参考教材：\n1.《单片微型计算机原理与接口技术》第3版.高锋.北京：科学出版社.2015.\n2.《新编MCS-51单片机应用设计》第3版.张毅刚.哈尔滨：哈尔滨工业大学出版社.2008."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 327.0,
            "max": 375,
            "min": 290,
            "score_line": 264,
            "planned": 35,
            "actual": 39,
            "retake_count": 55,
            "ratio": 1.4,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "通信原理\n参考教材：《通信原理》第七版.樊昌信.国防工业出版社.；单片机原理及应用\n参考教材：\n1.《单片微型计算机原理与接口技术》第3版.高锋.北京：科学出版社.2015.\n2.《新编MCS-51单片机应用设计》第3版.张毅刚.哈尔滨：哈尔滨工业大学出版社.2008."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 327.0,
            "max": 380,
            "min": 266,
            "score_line": 264,
            "planned": 17,
            "actual": 21,
            "retake_count": 25,
            "ratio": 1.2,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "通信原理\n参考教材：《通信原理》第七版.樊昌信.国防工业出版社.；单片机原理及应用\n参考教材：\n1.《单片微型计算机原理与接口技术》第3版.高锋.北京：科学出版社.2015.\n2.《新编MCS-51单片机应用设计》第3版.张毅刚.哈尔滨：哈尔滨工业大学出版社.2008."
          }
        ]
      }
    ],
    "summary": {
      "avg": 303.0,
      "max": 380,
      "min": 264,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 68,
      "actual_total": 62,
      "retake_people_total": 82
    },
    "retake_subjects": "通信原理\n参考教材：《通信原理》第七版.樊昌信.国防工业出版社.；单片机原理及应用\n参考教材：\n1.《单片微型计算机原理与接口技术》第3版.高锋.北京：科学出版社.2015.\n2.《新编MCS-51单片机应用设计》第3版.张毅刚.哈尔滨：哈尔滨工业大学出版社.2008."
  },
  "河南工业大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 291.0,
            "max": 297,
            "min": 285,
            "score_line": 264,
            "planned": 12,
            "actual": 2,
            "retake_count": 3,
            "ratio": 1.5,
            "note": null,
            "retake_code": "827.0",
            "retake_content": "复试笔试科目为数字信号处理，复试另含专业英语面试和综合专业知识面试。                     \n参考教材：数字信号处理教程（第三版），程佩青，清华大学出版社"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 379.0,
            "max": 437,
            "min": 346,
            "score_line": 344,
            "planned": 45,
            "actual": 45,
            "retake_count": 56,
            "ratio": 1.2,
            "note": null,
            "retake_code": "827.0",
            "retake_content": "复试笔试科目为数字信号处理，复试另含专业英语面试和综合专业知识面试。                     \n参考教材：数字信号处理教程（第三版），程佩青，清华大学出版社"
          }
        ]
      }
    ],
    "summary": {
      "avg": 335.0,
      "max": 437,
      "min": 285,
      "min_line": 264,
      "max_line": 344,
      "planned_total": 57,
      "actual_total": 47,
      "retake_people_total": 59
    },
    "retake_subjects": "复试笔试科目为数字信号处理，复试另含专业英语面试和综合专业知识面试。                     \n参考教材：数字信号处理教程（第三版），程佩青，清华大学出版社"
  },
  "河海大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程-01方向",
            "avg": 344.0,
            "max": 394,
            "min": 309,
            "score_line": 309,
            "planned": 26,
            "actual": 22,
            "retake_count": 33,
            "ratio": 1.5,
            "note": null,
            "retake_code": "863.0",
            "retake_content": "笔试科目： 通信原理                         \n参考书目：《通信原理》（第7版），樊昌信、曹丽娜，国防工业出版社，2013；《现代通信原理》，曹志刚、钱亚生，清华大学出版社，2003。；笔试科目：电子信息综合                    \n参考书目：《电子技术基础数字部分》（第六版），康华光，高等教育出版社，2014；《C程序设计》（第五版），谭浩强，清华大学出版社，2017。"
          },
          {
            "name": "081000（学）信息与通信工程-03方向",
            "avg": 331.0,
            "max": 331,
            "min": 331,
            "score_line": 331,
            "planned": 8,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "863.0",
            "retake_content": "笔试科目： 通信原理                         \n参考书目：《通信原理》（第7版），樊昌信、曹丽娜，国防工业出版社，2013；《现代通信原理》，曹志刚、钱亚生，清华大学出版社，2003。；笔试科目：电子信息综合                    \n参考书目：《电子技术基础数字部分》（第六版），康华光，高等教育出版社，2014；《C程序设计》（第五版），谭浩强，清华大学出版社，2017。"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 390.0,
            "max": 422,
            "min": 371,
            "score_line": 371,
            "planned": 73,
            "actual": 73,
            "retake_count": 95,
            "ratio": 1.3,
            "note": null,
            "retake_code": "863.0",
            "retake_content": "笔试科目： 通信原理                         \n参考书目：《通信原理》（第7版），樊昌信、曹丽娜，国防工业出版社，2013；《现代通信原理》，曹志刚、钱亚生，清华大学出版社，2003。；笔试科目：电子信息综合                    \n参考书目：《电子技术基础数字部分》（第六版），康华光，高等教育出版社，2014；《C程序设计》（第五版），谭浩强，清华大学出版社，2017。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 355.0,
      "max": 422,
      "min": 309,
      "min_line": 309,
      "max_line": 371,
      "planned_total": 107,
      "actual_total": 96,
      "retake_people_total": 129
    },
    "retake_subjects": "笔试科目： 通信原理                         \n参考书目：《通信原理》（第7版），樊昌信、曹丽娜，国防工业出版社，2013；《现代通信原理》，曹志刚、钱亚生，清华大学出版社，2003。；笔试科目：电子信息综合                    \n参考书目：《电子技术基础数字部分》（第六版），康华光，高等教育出版社，2014；《C程序设计》（第五版），谭浩强，清华大学出版社，2017。"
  },
  "浙江大学": {
    "colleges": [
      {
        "name": "工学院（泉州校区）",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 345.0,
            "max": 402,
            "min": 307,
            "score_line": null,
            "planned": null,
            "actual": null,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      }
    ],
    "summary": {
      "avg": 345.0,
      "max": 402,
      "min": 307,
      "min_line": null,
      "max_line": null,
      "planned_total": null,
      "actual_total": null,
      "retake_people_total": null
    },
    "retake_subjects": null
  },
  "浙江工商大学": {
    "colleges": [
      {
        "name": "信息与电子工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 317.0,
            "max": 348,
            "min": 296,
            "score_line": 264,
            "planned": 43,
            "actual": 7,
            "retake_count": 7,
            "ratio": 1.0,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "复试科目为程序设计（机试），不接受同等学力报考。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 368.0,
            "max": 420,
            "min": 334,
            "score_line": 332,
            "planned": 43,
            "actual": 65,
            "retake_count": 92,
            "ratio": 1.4,
            "note": null,
            "retake_code": "822.0",
            "retake_content": "复试科目为程序设计（机试），不接受同等学力报考。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 342.5,
      "max": 420,
      "min": 296,
      "min_line": 264,
      "max_line": 332,
      "planned_total": 86,
      "actual_total": 72,
      "retake_people_total": 99
    },
    "retake_subjects": "复试科目为程序设计（机试），不接受同等学力报考。"
  },
  "深圳大学": {
    "colleges": [
      {
        "name": "电子与信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 322.0,
            "max": 373,
            "min": 275,
            "score_line": 275,
            "planned": 48,
            "actual": 19,
            "retake_count": 27,
            "ratio": 1.4,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "081000 今年公开复试名单 27 人，拟录取 19 人。；085401 今年公开复试名单 149 人，拟录取 99 人。；085402 今年公开复试名单 71 人，拟录取 45 人。"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 335.0,
            "max": 402,
            "min": 296,
            "score_line": 295,
            "planned": 127,
            "actual": 99,
            "retake_count": 149,
            "ratio": 1.5,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "081000 今年公开复试名单 27 人，拟录取 19 人。；085401 今年公开复试名单 149 人，拟录取 99 人。；085402 今年公开复试名单 71 人，拟录取 45 人。"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 319.0,
            "max": 385,
            "min": 271,
            "score_line": 266,
            "planned": 68,
            "actual": 45,
            "retake_count": 71,
            "ratio": 1.6,
            "note": null,
            "retake_code": "802.0",
            "retake_content": "081000 今年公开复试名单 27 人，拟录取 19 人。；085401 今年公开复试名单 149 人，拟录取 99 人。；085402 今年公开复试名单 71 人，拟录取 45 人。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 325.3,
      "max": 402,
      "min": 271,
      "min_line": 266,
      "max_line": 295,
      "planned_total": 243,
      "actual_total": 163,
      "retake_people_total": 247
    },
    "retake_subjects": "081000 今年公开复试名单 27 人，拟录取 19 人。；085401 今年公开复试名单 149 人，拟录取 99 人。；085402 今年公开复试名单 71 人，拟录取 45 人。"
  },
  "湖北工业大学": {
    "colleges": [
      {
        "name": "卓越工程师学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 292.0,
            "max": 295,
            "min": 290,
            "score_line": 264,
            "planned": 6,
            "actual": 3,
            "retake_count": 4,
            "ratio": 1.3,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "官方未公布复试参考书目，建议优先复习培养学院（电气与电子工程学院）对应方向的主流教材，并重点准备综合面试。"
          }
        ]
      },
      {
        "name": "电气与电子工程学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 352.0,
            "max": 401,
            "min": 303,
            "score_line": 295,
            "planned": 30,
            "actual": 35,
            "retake_count": 49,
            "ratio": 1.4,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "笔试（数字信号处理 ）+面试                            \n参考教材：《数字信号处理》.姚天任等编.华中科技大学出版社.2010年.第3版.；笔试（通信原理）+面试                              \n参考教材：《通信原理》.樊昌信.曹丽娜.国防工业出版社.第7版."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 364.0,
            "max": 427,
            "min": 331,
            "score_line": 330,
            "planned": 30,
            "actual": 30,
            "retake_count": 48,
            "ratio": 1.6,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "笔试（数字信号处理 ）+面试                            \n参考教材：《数字信号处理》.姚天任等编.华中科技大学出版社.2010年.第3版.；笔试（通信原理）+面试                              \n参考教材：《通信原理》.樊昌信.曹丽娜.国防工业出版社.第7版."
          }
        ]
      }
    ],
    "summary": {
      "avg": 336.0,
      "max": 427,
      "min": 290,
      "min_line": 264,
      "max_line": 330,
      "planned_total": 66,
      "actual_total": 68,
      "retake_people_total": 101
    },
    "retake_subjects": "笔试（数字信号处理 ）+面试                            \n参考教材：《数字信号处理》.姚天任等编.华中科技大学出版社.2010年.第3版.；笔试（通信原理）+面试                              \n参考教材：《通信原理》.樊昌信.曹丽娜.国防工业出版社.第7版.；官方未公布复试参考书目，建议优先复习培养学院（电气与电子工程学院）对应方向的主流教材，并重点准备综合面试。"
  },
  "湖南大学": {
    "colleges": [
      {
        "name": "计算机学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 390.0,
            "max": 411,
            "min": 372,
            "score_line": 364,
            "planned": 14,
            "actual": 21,
            "retake_count": 28,
            "ratio": 1.3,
            "note": null,
            "retake_code": "828.0",
            "retake_content": "机试（闭卷编程）+综合面试"
          }
        ]
      }
    ],
    "summary": {
      "avg": 390.0,
      "max": 411,
      "min": 372,
      "min_line": 364,
      "max_line": 364,
      "planned_total": 14,
      "actual_total": 21,
      "retake_people_total": 28
    },
    "retake_subjects": "机试（闭卷编程）+综合面试"
  },
  "湖南师范大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "085402（专）通信工程",
            "avg": 393.0,
            "max": 420,
            "min": 373,
            "score_line": 373,
            "planned": 9,
            "actual": 21,
            "retake_count": 26,
            "ratio": 1.2,
            "note": null,
            "retake_code": "898.0",
            "retake_content": "笔试：电子信息技术综合知识。\n官网未提供参考教材。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 393.0,
      "max": 420,
      "min": 373,
      "min_line": 373,
      "max_line": 373,
      "planned_total": 9,
      "actual_total": 21,
      "retake_people_total": 26
    },
    "retake_subjects": "笔试：电子信息技术综合知识。\n官网未提供参考教材。"
  },
  "湘潭大学": {
    "colleges": [
      {
        "name": "自动化与电子信息学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 337.0,
            "max": 379,
            "min": 286,
            "score_line": 264,
            "planned": 21,
            "actual": 17,
            "retake_count": 17,
            "ratio": 1.0,
            "note": null,
            "retake_code": "835.0",
            "retake_content": "049002 程序设计（机试）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 337.0,
      "max": 379,
      "min": 286,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 21,
      "actual_total": 17,
      "retake_people_total": 17
    },
    "retake_subjects": "049002 程序设计（机试）"
  },
  "燕山大学": {
    "colleges": [
      {
        "name": "信息科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 308.0,
            "max": 362,
            "min": 268,
            "score_line": 264,
            "planned": 36,
            "actual": 6,
            "retake_count": 6,
            "ratio": 1.0,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "采用网络远程复试，复试科目：① M06数字信号处理、②M07通信原理、③M08高频电子线路、④M09数据结构                                      \n参考教材：                                    \n①《数字信号处理》第5版.高西全,丁玉美.西安电子科技大学出版社.\n②《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.\n③《高频电子线路》第五版.张肃文.高等教育出版社.\n④《数据结构（面向对象方法与C++语言描述）》第3版.殷人昆.清华大学出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 319.0,
            "max": 366,
            "min": 290,
            "score_line": 264,
            "planned": 54,
            "actual": 4,
            "retake_count": 4,
            "ratio": 1.0,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "采用网络远程复试，复试科目：① M06数字信号处理、②M07通信原理、③M08高频电子线路、④M09数据结构                                      \n参考教材：                                    \n①《数字信号处理》第5版.高西全,丁玉美.西安电子科技大学出版社.\n②《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.\n③《高频电子线路》第五版.张肃文.高等教育出版社.\n④《数据结构（面向对象方法与C++语言描述）》第3版.殷人昆.清华大学出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 313.5,
      "max": 366,
      "min": 268,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 90,
      "actual_total": 10,
      "retake_people_total": 10
    },
    "retake_subjects": "采用网络远程复试，复试科目：① M06数字信号处理、②M07通信原理、③M08高频电子线路、④M09数据结构                                      \n参考教材：                                    \n①《数字信号处理》第5版.高西全,丁玉美.西安电子科技大学出版社.\n②《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.\n③《高频电子线路》第五版.张肃文.高等教育出版社.\n④《数据结构（面向对象方法与C++语言描述）》第3版.殷人昆.清华大学出版社."
  },
  "电子科技大学": {
    "colleges": [
      {
        "name": "信息与通信工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 390.0,
            "max": 467,
            "min": 369,
            "score_line": 360,
            "planned": 74,
            "actual": 71,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "001001复试科目：《数字逻辑设计》"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 397.0,
            "max": 448,
            "min": 369,
            "score_line": 365,
            "planned": 262,
            "actual": 262,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "001001复试科目：《数字逻辑设计》"
          }
        ]
      },
      {
        "name": "物理学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 367.3,
            "max": 423,
            "min": 319,
            "score_line": 310,
            "planned": 69,
            "actual": 60,
            "retake_count": 92,
            "ratio": 1.5,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "012002复试科目：电路分析与电子线路"
          }
        ]
      },
      {
        "name": "电子科学与工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术-02方向",
            "avg": 406.0,
            "max": 435,
            "min": 378,
            "score_line": 365,
            "planned": 15,
            "actual": 14,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "002002复试科目：电路分析与电子线路"
          },
          {
            "name": "085400（专）电子信息-02方向",
            "avg": 389.0,
            "max": 424,
            "min": 365,
            "score_line": 365,
            "planned": 28,
            "actual": 28,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "002002复试科目：电路分析与电子线路"
          }
        ]
      },
      {
        "name": "电子科学技术研究院",
        "majors": [
          {
            "name": "085400（专）电子信息-01方向",
            "avg": 363.0,
            "max": 363,
            "min": 363,
            "score_line": 320,
            "planned": 1,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "023003复试科目：数字逻辑设计；023005复试科目：模拟电路"
          },
          {
            "name": "085400（专）电子信息-03方向",
            "avg": 369.0,
            "max": 419,
            "min": 336,
            "score_line": 320,
            "planned": 8,
            "actual": 8,
            "retake_count": 12,
            "ratio": 1.5,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "023003复试科目：数字逻辑设计；023005复试科目：模拟电路"
          }
        ]
      },
      {
        "name": "电子科技大学（深圳）高等研究院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 396.3,
            "max": 424,
            "min": 371,
            "score_line": 370,
            "planned": 42,
            "actual": 28,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "028001复试科目：通信原理；028005复试科目：数字电路"
          },
          {
            "name": "085407（专）仪器仪表工程",
            "avg": 386.4,
            "max": 427,
            "min": 349,
            "score_line": 345,
            "planned": 40,
            "actual": 25,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "028001复试科目：通信原理；028005复试科目：数字电路"
          }
        ]
      },
      {
        "name": "自动化工程学院",
        "majors": [
          {
            "name": "080400（学)仪器科学与技术",
            "avg": 368.0,
            "max": 429,
            "min": 315,
            "score_line": 315,
            "planned": 67,
            "actual": 31,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "861.0",
            "retake_content": "006001复试科目：微机原理与数字电路"
          },
          {
            "name": "085407（专）仪器仪表工程",
            "avg": 366.8,
            "max": 411,
            "min": 330,
            "score_line": 330,
            "planned": 60,
            "actual": 38,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "861.0",
            "retake_content": "006001复试科目：微机原理与数字电路"
          }
        ]
      },
      {
        "name": "航空航天学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 379.0,
            "max": 429,
            "min": 342,
            "score_line": 340,
            "planned": 92,
            "actual": 57,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "010002复试科目：《数字逻辑设计》                  \n参考教材：《数字设计原理与实践》第4版.John F.Wakerly.高等教育出版社.2007."
          },
          {
            "name": "089901（学）低空技术与工程",
            "avg": 378.7,
            "max": 408,
            "min": 342,
            "score_line": 340,
            "planned": 25,
            "actual": 30,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "010002复试科目：《数字逻辑设计》                  \n参考教材：《数字设计原理与实践》第4版.John F.Wakerly.高等教育出版社.2007."
          }
        ]
      },
      {
        "name": "资源与环境学院",
        "majors": [
          {
            "name": "085411（专）大数据技术与工程",
            "avg": 375.3,
            "max": 406,
            "min": 340,
            "score_line": 340,
            "planned": 60,
            "actual": 37,
            "retake_count": 52,
            "ratio": 1.4,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "007001复试科目：数字信号处理"
          }
        ]
      },
      {
        "name": "通信抗干扰全国重点实验室",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 399.5,
            "max": 433,
            "min": 360,
            "score_line": 360,
            "planned": 76,
            "actual": 22,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "022001复试科目：《通信原理》"
          },
          {
            "name": "085400（专）电子信息",
            "avg": 401.5,
            "max": 441,
            "min": 371,
            "score_line": 370,
            "planned": 103,
            "actual": 78,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": "858.0",
            "retake_content": "022001复试科目：《通信原理》"
          }
        ]
      }
    ],
    "summary": {
      "avg": 383.3,
      "max": 467,
      "min": 315,
      "min_line": 310,
      "max_line": 370,
      "planned_total": 1022,
      "actual_total": 790,
      "retake_people_total": 157
    },
    "retake_subjects": "001001复试科目：《数字逻辑设计》；022001复试科目：《通信原理》；010002复试科目：《数字逻辑设计》                  \n参考教材：《数字设计原理与实践》第4版.John F.Wakerly.高等教育出版社.2007.；012002复试科目：电路分析与电子线路；007001复试科目：数字信号处理；028001复试科目：通信原理；028005复试科目：数字电路；023003复试科目：数字逻辑设计；023005复试科目：模拟电路；002002复试科目：电路分析与电子线路；006001复试科目：微机原理与数字电路"
  },
  "石家庄铁道大学": {
    "colleges": [
      {
        "name": "信息科学与技术学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 367.0,
            "max": 420,
            "min": 328,
            "score_line": 319,
            "planned": 20,
            "actual": 26,
            "retake_count": 38,
            "ratio": 1.5,
            "note": null,
            "retake_code": "894.0",
            "retake_content": "104计算机网络 / 102数据库原理 / 103模拟电子技术（三选一）                                 参考教材：                                        \n104：《计算机网络》（第七版）.谢希仁.电子工业出版社                                      102:《数据库原理与应用教程》.（第三版）.何玉洁.机械工业出版社                            103:《模拟电子技术基础》（第五版）.童诗白 华成英.高等教育出版社"
          }
        ]
      }
    ],
    "summary": {
      "avg": 367.0,
      "max": 420,
      "min": 328,
      "min_line": 319,
      "max_line": 319,
      "planned_total": 20,
      "actual_total": 26,
      "retake_people_total": 38
    },
    "retake_subjects": "104计算机网络 / 102数据库原理 / 103模拟电子技术（三选一）                                 参考教材：                                        \n104：《计算机网络》（第七版）.谢希仁.电子工业出版社                                      102:《数据库原理与应用教程》.（第三版）.何玉洁.机械工业出版社                            103:《模拟电子技术基础》（第五版）.童诗白 华成英.高等教育出版社"
  },
  "福州大学": {
    "colleges": [
      {
        "name": "先进制造学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术（含西海联培）",
            "avg": 379.1,
            "max": 441,
            "min": 333,
            "score_line": 333,
            "planned": 77,
            "actual": 77,
            "retake_count": 101,
            "ratio": 1.3,
            "note": null,
            "retake_code": "866.0",
            "retake_content": "复试科目：数字电路、通信原理。\n参考书目：\n1.《数字电子技术基础》第6版.阎石.高等教育出版社.2016；\n2.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015."
          }
        ]
      },
      {
        "name": "物理与信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 343.6,
            "max": 392,
            "min": 294,
            "score_line": 294,
            "planned": 30,
            "actual": 30,
            "retake_count": 42,
            "ratio": 1.4,
            "note": null,
            "retake_code": "866.0",
            "retake_content": "复试科目：数字电路、通信原理。\n参考书目：\n1.《数字电子技术基础》第6版.阎石.高等教育出版社.2016；\n2.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 403.8,
            "max": 437,
            "min": 384,
            "score_line": 384,
            "planned": 88,
            "actual": 88,
            "retake_count": 117,
            "ratio": 1.3,
            "note": null,
            "retake_code": "866.0",
            "retake_content": "复试科目：数字电路、通信原理。\n参考书目：\n1.《数字电子技术基础》第6版.阎石.高等教育出版社.2016；\n2.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015."
          }
        ]
      }
    ],
    "summary": {
      "avg": 375.5,
      "max": 441,
      "min": 294,
      "min_line": 294,
      "max_line": 384,
      "planned_total": 195,
      "actual_total": 195,
      "retake_people_total": 260
    },
    "retake_subjects": "复试科目：数字电路、通信原理。\n参考书目：\n1.《数字电子技术基础》第6版.阎石.高等教育出版社.2016；\n2.《通信原理》第7版.樊昌信,曹丽娜.国防工业出版社.2015."
  },
  "苏州大学": {
    "colleges": [
      {
        "name": "光电科学与工程学院",
        "majors": [
          {
            "name": "085406（专）控制工程",
            "avg": 402.6,
            "max": 443,
            "min": 368,
            "score_line": 368,
            "planned": 30,
            "actual": 30,
            "retake_count": 44,
            "ratio": 1.5,
            "note": null,
            "retake_code": "839.0",
            "retake_content": "026002 电子技术基础（笔试） + 综合（面试）      参考教材：\n1、《电子技术基础-模拟部分》，康光华编，高等教育出版社，第六版                                  2、《电子技术基础-数字部分》，康光华编，高等教育出版社，第六版"
          }
        ]
      },
      {
        "name": "电子信息学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 361.0,
            "max": 400,
            "min": 337,
            "score_line": 336,
            "planned": 13,
            "actual": 13,
            "retake_count": 16,
            "ratio": 1.2,
            "note": null,
            "retake_code": "837.0",
            "retake_content": "017002 电路分析和C语言（笔试） + 综合（面试）   \n参考教材：\n1、《电路》（第六版），邱关源（原著），罗先觉（主编），高等教育出版社                          2、C语言，不指定参考书目"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 411.0,
            "max": 430,
            "min": 397,
            "score_line": 393,
            "planned": 17,
            "actual": 17,
            "retake_count": 21,
            "ratio": 1.2,
            "note": null,
            "retake_code": "837.0",
            "retake_content": "017002 电路分析和C语言（笔试） + 综合（面试）   \n参考教材：\n1、《电路》（第六版），邱关源（原著），罗先觉（主编），高等教育出版社                          2、C语言，不指定参考书目"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 408.0,
            "max": 425,
            "min": 391,
            "score_line": 391,
            "planned": 10,
            "actual": 10,
            "retake_count": 12,
            "ratio": 1.2,
            "note": null,
            "retake_code": "837.0",
            "retake_content": "017002 电路分析和C语言（笔试） + 综合（面试）   \n参考教材：\n1、《电路》（第六版），邱关源（原著），罗先觉（主编），高等教育出版社                          2、C语言，不指定参考书目"
          }
        ]
      }
    ],
    "summary": {
      "avg": 395.6,
      "max": 443,
      "min": 337,
      "min_line": 336,
      "max_line": 393,
      "planned_total": 70,
      "actual_total": 70,
      "retake_people_total": 93
    },
    "retake_subjects": "017002 电路分析和C语言（笔试） + 综合（面试）   \n参考教材：\n1、《电路》（第六版），邱关源（原著），罗先觉（主编），高等教育出版社                          2、C语言，不指定参考书目；026002 电子技术基础（笔试） + 综合（面试）      参考教材：\n1、《电子技术基础-模拟部分》，康光华编，高等教育出版社，第六版                                  2、《电子技术基础-数字部分》，康光华编，高等教育出版社，第六版"
  },
  "西北工业大学（特殊稿-缺完整可分专业复试名单-仅拟录取可核版）": {
    "colleges": [
      {
        "name": "动力与能源学院",
        "majors": [
          {
            "name": "081002（学）信号与信息处理",
            "avg": null,
            "max": null,
            "min": null,
            "score_line": null,
            "planned": 1,
            "actual": null,
            "retake_count": null,
            "ratio": null,
            "note": "一志愿无人上线",
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "医学研究院",
        "majors": [
          {
            "name": "085409（专）生物医学工程",
            "avg": 378.5,
            "max": 388,
            "min": 369,
            "score_line": 310,
            "planned": 6,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "电子信息学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 384.7,
            "max": 426,
            "min": 336,
            "score_line": 330,
            "planned": 47,
            "actual": 38,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 401.5,
            "max": 421,
            "min": 383,
            "score_line": 380,
            "planned": 60,
            "actual": 23,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "081100（学）控制科学与工程",
            "avg": 391.5,
            "max": 421,
            "min": 356,
            "score_line": 350,
            "planned": 17,
            "actual": 11,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085401 （专）新一代电子信息技术（含量子技术等）",
            "avg": 404.8,
            "max": 435,
            "min": 387,
            "score_line": 385,
            "planned": 154,
            "actual": 53,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "140100（学）集成电路科学与工程",
            "avg": 376.0,
            "max": 401,
            "min": 351,
            "score_line": 300,
            "planned": 3,
            "actual": 2,
            "retake_count": null,
            "ratio": null,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "航海学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 403.0,
            "max": 437,
            "min": 388,
            "score_line": 380,
            "planned": 21,
            "actual": 9,
            "retake_count": 13,
            "ratio": 1.4,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "082400（学）船舶与海洋工程（02方向）",
            "avg": 381.0,
            "max": 400,
            "min": 355,
            "score_line": 350,
            "planned": 9,
            "actual": 3,
            "retake_count": 4,
            "ratio": 1.3,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "082400（学）船舶与海洋工程（05方向）",
            "avg": 375.0,
            "max": 412,
            "min": 343,
            "score_line": 300,
            "planned": 5,
            "actual": 6,
            "retake_count": 7,
            "ratio": 1.2,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "082600（学）兵器科学与技术（03方向）",
            "avg": 381.5,
            "max": 393,
            "min": 371,
            "score_line": 365,
            "planned": 12,
            "actual": 7,
            "retake_count": 10,
            "ratio": 1.4,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085401（专）新一代电子信息技术（含量子技术等）（01方向）",
            "avg": 410.0,
            "max": 433,
            "min": 390,
            "score_line": 390,
            "planned": 38,
            "actual": 21,
            "retake_count": 27,
            "ratio": 1.3,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085401（专）新一代电子信息技术（含量子技术等）（02方向）",
            "avg": 403.6,
            "max": 433,
            "min": 385,
            "score_line": 375,
            "planned": 29,
            "actual": 18,
            "retake_count": 25,
            "ratio": 1.4,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085401（专）新一代电子信息技术（含量子技术等）（04方向）",
            "avg": 393.9,
            "max": 417,
            "min": 364,
            "score_line": 310,
            "planned": 9,
            "actual": 9,
            "retake_count": 11,
            "ratio": 1.2,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      }
    ],
    "summary": {
      "avg": 391.2,
      "max": 437,
      "min": 336,
      "min_line": 300,
      "max_line": 390,
      "planned_total": 411,
      "actual_total": 202,
      "retake_people_total": 99
    },
    "retake_subjects": null
  },
  "西南交通大学": {
    "colleges": [
      {
        "name": "信息科学与技术学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 378.0,
            "max": 415,
            "min": 351,
            "score_line": 350,
            "planned": 33,
            "actual": 41,
            "retake_count": 63,
            "ratio": 1.5,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "081101（学）控制理论与控制工程",
            "avg": 329.0,
            "max": 335,
            "min": 318,
            "score_line": 315,
            "planned": 1,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "082302（学）交通信息工程及控制",
            "avg": 359.0,
            "max": 420,
            "min": 319,
            "score_line": 315,
            "planned": 14,
            "actual": 18,
            "retake_count": 29,
            "ratio": 1.6,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "083900（学）网络空间安全",
            "avg": 365.0,
            "max": 398,
            "min": 333,
            "score_line": 330,
            "planned": 5,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 346.0,
            "max": 380,
            "min": 315,
            "score_line": 315,
            "planned": 3,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "085402（专）通信工程",
            "avg": 408.0,
            "max": 440,
            "min": 370,
            "score_line": 370,
            "planned": 25,
            "actual": 38,
            "retake_count": 73,
            "ratio": 1.9,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "085406（专）控制工程",
            "avg": 329.0,
            "max": 358,
            "min": 276,
            "score_line": 270,
            "planned": 3,
            "actual": 3,
            "retake_count": 5,
            "ratio": 1.7,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "085408（专）光电信息工程",
            "avg": 390.0,
            "max": 430,
            "min": 330,
            "score_line": 330,
            "planned": 10,
            "actual": 10,
            "retake_count": 18,
            "ratio": 1.8,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "085412（专）网络与信息安全",
            "avg": 371.0,
            "max": 402,
            "min": 317,
            "score_line": 315,
            "planned": 4,
            "actual": 4,
            "retake_count": 8,
            "ratio": 2.0,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "086100（专）交通运输",
            "avg": 391.0,
            "max": 422,
            "min": 366,
            "score_line": 360,
            "planned": 19,
            "actual": 19,
            "retake_count": 38,
            "ratio": 2.0,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          }
        ]
      },
      {
        "name": "联合培养专项",
        "majors": [
          {
            "name": "086100（专）交通运输（01方向）",
            "avg": 396.0,
            "max": 407,
            "min": 385,
            "score_line": 360,
            "planned": 3,
            "actual": 2,
            "retake_count": 3,
            "ratio": 1.5,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          },
          {
            "name": "086100（专）交通运输（02方向）",
            "avg": 363.0,
            "max": 406,
            "min": 313,
            "score_line": 360,
            "planned": 3,
            "actual": 5,
            "retake_count": 5,
            "ratio": 1.0,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "面试（外语听说15 + 专业知识65 + 综合素质20）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 368.8,
      "max": 440,
      "min": 276,
      "min_line": 270,
      "max_line": 370,
      "planned_total": 123,
      "actual_total": 149,
      "retake_people_total": 251
    },
    "retake_subjects": "面试（外语听说15 + 专业知识65 + 综合素质20）"
  },
  "西南大学": {
    "colleges": [
      {
        "name": "物理科学与技术学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 288.0,
            "max": 328,
            "min": 264,
            "score_line": 264,
            "planned": 3,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "844.0",
            "retake_content": "通信原理\n参考教材：官网未公布。"
          }
        ]
      },
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 327.0,
            "max": 392,
            "min": 288,
            "score_line": 285,
            "planned": 45,
            "actual": 45,
            "retake_count": 57,
            "ratio": 1.3,
            "note": null,
            "retake_code": "844.0",
            "retake_content": "电路分析\n参考教材：官网未公布。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 307.5,
      "max": 392,
      "min": 264,
      "min_line": 264,
      "max_line": 285,
      "planned_total": 48,
      "actual_total": 48,
      "retake_people_total": 60
    },
    "retake_subjects": "通信原理\n参考教材：官网未公布。；电路分析\n参考教材：官网未公布。"
  },
  "西安交通大学": {
    "colleges": [
      {
        "name": "电子与信息学部-信息与通信工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 380.0,
            "max": 395,
            "min": 364,
            "score_line": 335,
            "planned": 5,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "815.0；869.0",
            "retake_content": "通信原理、数字图像处理、电磁场与波三选一；\n参考教材：\n1.《现代通信原理》第3版.罗新民等.高等教育出版社.\n2.《数字图像处理》第4版.冈萨雷斯等.电子工业出版社.\n3.《电磁场与电磁波》第4版.冯恩信.西安交通大学出版社."
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 379.0,
            "max": 423,
            "min": 353,
            "score_line": 335,
            "planned": 12,
            "actual": 21,
            "retake_count": 35,
            "ratio": 1.7,
            "note": null,
            "retake_code": "815.0；869.0",
            "retake_content": "通信原理、数字图像处理、电磁场与波三选一；\n参考教材：\n1.《现代通信原理》第3版.罗新民等.高等教育出版社.\n2.《数字图像处理》第4版.冈萨雷斯等.电子工业出版社.\n3.《电磁场与电磁波》第4版.冯恩信.西安交通大学出版社."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 414.0,
            "max": 446,
            "min": 390,
            "score_line": 385,
            "planned": 43,
            "actual": 48,
            "retake_count": 87,
            "ratio": 1.8,
            "note": null,
            "retake_code": "815.0；869.0",
            "retake_content": "通信原理、数字图像处理、电磁场与波三选一；\n参考教材：\n1.《现代通信原理》第3版.罗新民等.高等教育出版社.\n2.《数字图像处理》第4版.冈萨雷斯等.电子工业出版社.\n3.《电磁场与电磁波》第4版.冯恩信.西安交通大学出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 391.0,
      "max": 446,
      "min": 353,
      "min_line": 335,
      "max_line": 385,
      "planned_total": 60,
      "actual_total": 71,
      "retake_people_total": 124
    },
    "retake_subjects": "通信原理、数字图像处理、电磁场与波三选一；\n参考教材：\n1.《现代通信原理》第3版.罗新民等.高等教育出版社.\n2.《数字图像处理》第4版.冈萨雷斯等.电子工业出版社.\n3.《电磁场与电磁波》第4版.冯恩信.西安交通大学出版社."
  },
  "西安工程大学": {
    "colleges": [
      {
        "name": "电子信息学院",
        "majors": [
          {
            "name": "081100（学）控制科学与工程（02检测技术与信息处理）",
            "avg": 356.0,
            "max": 380,
            "min": 331,
            "score_line": 331,
            "planned": 4,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "参考书目:《数字信号处理》第三版.高西全等.西安电子科技大学出版社.2008"
          },
          {
            "name": "085400（专）电子信息（04智能信息处理与电子系统应用技术）",
            "avg": 318.0,
            "max": 393,
            "min": 266,
            "score_line": 265,
            "planned": 36,
            "actual": 62,
            "retake_count": 69,
            "ratio": 1.1,
            "note": null,
            "retake_code": "812.0",
            "retake_content": "参考书目:《数字信号处理》第三版.高西全等.西安电子科技大学出版社.2008"
          }
        ]
      }
    ],
    "summary": {
      "avg": 337.0,
      "max": 393,
      "min": 266,
      "min_line": 265,
      "max_line": 331,
      "planned_total": 40,
      "actual_total": 64,
      "retake_people_total": 71
    },
    "retake_subjects": "参考书目:《数字信号处理》第三版.高西全等.西安电子科技大学出版社.2008"
  },
  "西安理工大学": {
    "colleges": [
      {
        "name": "印刷包装与数字媒体学院",
        "majors": [
          {
            "name": "085400（专）电子信息（人工智能）",
            "avg": 317.0,
            "max": 374,
            "min": 266,
            "score_line": 264,
            "planned": 22,
            "actual": 29,
            "retake_count": 35,
            "ratio": 1.2,
            "note": null,
            "retake_code": "845.0",
            "retake_content": "766 信息论基础 / 768 数字信号处理基础 / 792 数字媒体技术基础（三选一）；参考书目：①《信息论与编码》第3版，曹雪虹、张宗橙，清华大学出版社；②《数字信号处理导论（第二版）》，胡广书，清华大学出版社；③《数字媒体技术导论》（第2版），刘清堂，清华大学出版社（25年参考，以最新为准）"
          }
        ]
      },
      {
        "name": "自动化与信息工程学院",
        "majors": [
          {
            "name": "081001（学）通信与信息系统",
            "avg": 328.0,
            "max": 380,
            "min": 274,
            "score_line": 264,
            "planned": 28,
            "actual": 24,
            "retake_count": 31,
            "ratio": 1.3,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "716 通信原理 / 790 数字信号处理（二）（二选一）；\n参考书目：①《通信原理》（第7版），樊昌信、曹丽娜，国防工业出版社；②《数字信号处理》（第四版），高西全、丁玉美，西安电子科技大学出版社（25年参考，以最新为准）"
          },
          {
            "name": "085402（专）通信工程（含宽带网络与移动通信）",
            "avg": 349.0,
            "max": 407,
            "min": 299,
            "score_line": 295,
            "planned": 43,
            "actual": 46,
            "retake_count": 56,
            "ratio": 1.2,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "716 通信原理 / 790 数字信号处理（二）（二选一）；\n参考书目：①《通信原理》（第7版），樊昌信、曹丽娜，国防工业出版社；②《数字信号处理》（第四版），高西全、丁玉美，西安电子科技大学出版社（25年参考，以最新为准）"
          }
        ]
      }
    ],
    "summary": {
      "avg": 331.3,
      "max": 407,
      "min": 266,
      "min_line": 264,
      "max_line": 295,
      "planned_total": 93,
      "actual_total": 99,
      "retake_people_total": 122
    },
    "retake_subjects": "716 通信原理 / 790 数字信号处理（二）（二选一）；\n参考书目：①《通信原理》（第7版），樊昌信、曹丽娜，国防工业出版社；②《数字信号处理》（第四版），高西全、丁玉美，西安电子科技大学出版社（25年参考，以最新为准）；766 信息论基础 / 768 数字信号处理基础 / 792 数字媒体技术基础（三选一）；参考书目：①《信息论与编码》第3版，曹雪虹、张宗橙，清华大学出版社；②《数字信号处理导论（第二版）》，胡广书，清华大学出版社；③《数字媒体技术导论》（第2版），刘清堂，清华大学出版社（25年参考，以最新为准）"
  },
  "西安电子科技大学": {
    "colleges": [
      {
        "name": "人工智能学院",
        "majors": [
          {
            "name": "081100（学）控制科学与工程",
            "avg": 102.0,
            "max": 123,
            "min": 81,
            "score_line": 305,
            "planned": 2,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "信息力学与感知工程学院",
        "majors": [
          {
            "name": "140400（学）遥感科学与技术",
            "avg": 132.9,
            "max": 141,
            "min": 123,
            "score_line": 290,
            "planned": 11,
            "actual": 11,
            "retake_count": 17,
            "ratio": 1.6,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "1404J7（学）低空技术与工程",
            "avg": 120.2,
            "max": 130,
            "min": 108,
            "score_line": 295,
            "planned": 5,
            "actual": 5,
            "retake_count": 8,
            "ratio": 1.6,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085401（专）新一代电子信息技术（含量子技术等）",
            "avg": 123.6,
            "max": 147,
            "min": 104,
            "score_line": 285,
            "planned": 15,
            "actual": 13,
            "retake_count": 18,
            "ratio": 1.4,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "卓越工程师学院",
        "majors": [
          {
            "name": "085401（专）新一代电子信息技术-01",
            "avg": 120.4,
            "max": 144,
            "min": 91,
            "score_line": 345,
            "planned": 87,
            "actual": 87,
            "retake_count": 127,
            "ratio": 1.5,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "9024 电子信息技术综合基础知识三（五选三）\n参考教材：1.《电磁场与电磁波基础》.第三版.路宏敏等.科学出版社2022;2.《简明微波》第1到4章.梁昌洪.高等教育出版社;3.《数字信号处理》第四版.高西全.西电科大出版社;4.《模拟电子技术基础》.孙肖子等.西电科大出版社;5.《数字电子技术基础》第二版.杨颂华等.西电科大出版社.；9011信息技术综合基础（同上）"
          },
          {
            "name": "085401（专）新一代电子信息技术-02",
            "avg": 111.0,
            "max": 128,
            "min": 86,
            "score_line": 290,
            "planned": 18,
            "actual": 11,
            "retake_count": 11,
            "ratio": 1.0,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "9024 电子信息技术综合基础知识三（五选三）\n参考教材：1.《电磁场与电磁波基础》.第三版.路宏敏等.科学出版社2022;2.《简明微波》第1到4章.梁昌洪.高等教育出版社;3.《数字信号处理》第四版.高西全.西电科大出版社;4.《模拟电子技术基础》.孙肖子等.西电科大出版社;5.《数字电子技术基础》第二版.杨颂华等.西电科大出版社.；9011信息技术综合基础（同上）"
          },
          {
            "name": "085401（专）新一代电子信息技术-03",
            "avg": 123.6,
            "max": 147,
            "min": 100,
            "score_line": 360,
            "planned": 106,
            "actual": 108,
            "retake_count": 143,
            "ratio": 1.3,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "9024 电子信息技术综合基础知识三（五选三）\n参考教材：1.《电磁场与电磁波基础》.第三版.路宏敏等.科学出版社2022;2.《简明微波》第1到4章.梁昌洪.高等教育出版社;3.《数字信号处理》第四版.高西全.西电科大出版社;4.《模拟电子技术基础》.孙肖子等.西电科大出版社;5.《数字电子技术基础》第二版.杨颂华等.西电科大出版社.；9011信息技术综合基础（同上）"
          },
          {
            "name": "085402（专）通信工程-01",
            "avg": 122.4,
            "max": 144,
            "min": 101,
            "score_line": 345,
            "planned": 33,
            "actual": 33,
            "retake_count": 48,
            "ratio": 1.4,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "9024 电子信息技术综合基础知识三（五选三）\n参考教材：1.《电磁场与电磁波基础》.第三版.路宏敏等.科学出版社2022;2.《简明微波》第1到4章.梁昌洪.高等教育出版社;3.《数字信号处理》第四版.高西全.西电科大出版社;4.《模拟电子技术基础》.孙肖子等.西电科大出版社;5.《数字电子技术基础》第二版.杨颂华等.西电科大出版社.；9011信息技术综合基础（同上）"
          },
          {
            "name": "085402（专）通信工程-02",
            "avg": 124.8,
            "max": 144,
            "min": 102,
            "score_line": 355,
            "planned": 34,
            "actual": 34,
            "retake_count": 52,
            "ratio": 1.5,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "9024 电子信息技术综合基础知识三（五选三）\n参考教材：1.《电磁场与电磁波基础》.第三版.路宏敏等.科学出版社2022;2.《简明微波》第1到4章.梁昌洪.高等教育出版社;3.《数字信号处理》第四版.高西全.西电科大出版社;4.《模拟电子技术基础》.孙肖子等.西电科大出版社;5.《数字电子技术基础》第二版.杨颂华等.西电科大出版社.；9011信息技术综合基础（同上）"
          }
        ]
      },
      {
        "name": "机电工程学院",
        "majors": [
          {
            "name": "080400（学）仪器科学与技术",
            "avg": 101.4,
            "max": 117,
            "min": 83,
            "score_line": 305,
            "planned": 13,
            "actual": 13,
            "retake_count": 17,
            "ratio": 1.3,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085407（专）仪器仪表工程",
            "avg": 113.2,
            "max": 131,
            "min": 90,
            "score_line": 325,
            "planned": 13,
            "actual": 13,
            "retake_count": 18,
            "ratio": 1.4,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "生命科学技术学院",
        "majors": [
          {
            "name": "083100（学）生物医学工程",
            "avg": 106.8,
            "max": 128,
            "min": 85,
            "score_line": 305,
            "planned": 30,
            "actual": 30,
            "retake_count": 44,
            "ratio": 1.5,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085409（专）生物医学工程",
            "avg": 105.2,
            "max": 124,
            "min": 64,
            "score_line": 310,
            "planned": 12,
            "actual": 12,
            "retake_count": 18,
            "ratio": 1.5,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "电子工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 120.9,
            "max": 144,
            "min": 90,
            "score_line": 315,
            "planned": 55,
            "actual": 56,
            "retake_count": 152,
            "ratio": 2.7,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 118.3,
            "max": 140,
            "min": 83,
            "score_line": 330,
            "planned": 86,
            "actual": 87,
            "retake_count": 138,
            "ratio": 1.6,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "081100（学）控制科学与工程",
            "avg": 116.8,
            "max": 124,
            "min": 110,
            "score_line": 330,
            "planned": 14,
            "actual": 5,
            "retake_count": 5,
            "ratio": 1.0,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 123.6,
            "max": 147,
            "min": 96,
            "score_line": 360,
            "planned": 184,
            "actual": 182,
            "retake_count": 268,
            "ratio": 1.5,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "空间科学与技术学院",
        "majors": [
          {
            "name": "080400（学）仪器科学与技术",
            "avg": 126.6,
            "max": 147,
            "min": 95,
            "score_line": 310,
            "planned": 35,
            "actual": 40,
            "retake_count": 55,
            "ratio": 1.4,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "081100（学）控制科学与工程",
            "avg": 119.3,
            "max": 141,
            "min": 104,
            "score_line": 310,
            "planned": 6,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": null,
            "retake_content": null
          },
          {
            "name": "085401（专）新一代电子信息技术（含量子技术等）",
            "avg": 128.6,
            "max": 144,
            "min": 100,
            "score_line": 320,
            "planned": 61,
            "actual": 64,
            "retake_count": 90,
            "ratio": 1.4,
            "note": null,
            "retake_code": null,
            "retake_content": null
          }
        ]
      },
      {
        "name": "通信工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 124.1,
            "max": 144,
            "min": 81,
            "score_line": 345,
            "planned": 148,
            "actual": 144,
            "retake_count": 223,
            "ratio": 1.6,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "9011 信息技术综合基础\n参考教材：1.《数字逻辑电路基础》.陈彦辉,冯毛官,胡力\n山编著.西安电子科技大学出版社.2014;2.《数字信号处理—原理、实现与应用（第2版）》高西全.电子工业出版社/《Digital Signal Processing-A Computer Based approach》Sanjit K.Mitra.McGraw-Hill出版;3.《现代通信原理与技术》张辉,曹丽娜.西电科大出版社;4.《通信原理》第七版.樊昌信,曹丽娜.国防工业出版社."
          },
          {
            "name": "110500（学）军队指挥学",
            "avg": 105.8,
            "max": 148,
            "min": 80,
            "score_line": 270,
            "planned": 11,
            "actual": 14,
            "retake_count": 16,
            "ratio": 1.1,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "9011 信息技术综合基础\n参考教材：1.《数字逻辑电路基础》.陈彦辉,冯毛官,胡力\n山编著.西安电子科技大学出版社.2014;2.《数字信号处理—原理、实现与应用（第2版）》高西全.电子工业出版社/《Digital Signal Processing-A Computer Based approach》Sanjit K.Mitra.McGraw-Hill出版;3.《现代通信原理与技术》张辉,曹丽娜.西电科大出版社;4.《通信原理》第七版.樊昌信,曹丽娜.国防工业出版社."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 124.7,
            "max": 145,
            "min": 81,
            "score_line": 345,
            "planned": 176,
            "actual": 176,
            "retake_count": 257,
            "ratio": 1.5,
            "note": null,
            "retake_code": "811.0",
            "retake_content": "9011 信息技术综合基础\n参考教材：1.《数字逻辑电路基础》.陈彦辉,冯毛官,胡力\n山编著.西安电子科技大学出版社.2014;2.《数字信号处理—原理、实现与应用（第2版）》高西全.电子工业出版社/《Digital Signal Processing-A Computer Based approach》Sanjit K.Mitra.McGraw-Hill出版;3.《现代通信原理与技术》张辉,曹丽娜.西电科大出版社;4.《通信原理》第七版.樊昌信,曹丽娜.国防工业出版社."
          }
        ]
      }
    ],
    "summary": {
      "avg": 118.1,
      "max": 148,
      "min": 64,
      "min_line": 270,
      "max_line": 360,
      "planned_total": 1155,
      "actual_total": 1143,
      "retake_people_total": 1730
    },
    "retake_subjects": "9011 信息技术综合基础\n参考教材：1.《数字逻辑电路基础》.陈彦辉,冯毛官,胡力\n山编著.西安电子科技大学出版社.2014;2.《数字信号处理—原理、实现与应用（第2版）》高西全.电子工业出版社/《Digital Signal Processing-A Computer Based approach》Sanjit K.Mitra.McGraw-Hill出版;3.《现代通信原理与技术》张辉,曹丽娜.西电科大出版社;4.《通信原理》第七版.樊昌信,曹丽娜.国防工业出版社.；9024 电子信息技术综合基础知识三（五选三）\n参考教材：1.《电磁场与电磁波基础》.第三版.路宏敏等.科学出版社2022;2.《简明微波》第1到4章.梁昌洪.高等教育出版社;3.《数字信号处理》第四版.高西全.西电科大出版社;4.《模拟电子技术基础》.孙肖子等.西电科大出版社;5.《数字电子技术基础》第二版.杨颂华等.西电科大出版社.；9011信息技术综合基础（同上）"
  },
  "西安石油大学": {
    "colleges": [
      {
        "name": "电子工程学院",
        "majors": [
          {
            "name": "080400（学）仪器科学与技术",
            "avg": 304.0,
            "max": 331,
            "min": 275,
            "score_line": 275,
            "planned": 20,
            "actual": 4,
            "retake_count": 4,
            "ratio": 1.0,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "笔试：911单片机原理与应用                         \n参考教材：                                  \n（1）倪云峰等编著，《单片机原理与应用》.第2版.西安电子科技大学出版社.2020.\n（2）何宏等编著.《单片机原理及应用》.清华大学出版社.2022.\n（3）张仁彦等编著.《单片机原理及应用》.第2版.机械工业出版社.2024年."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 331.5,
            "max": 402,
            "min": 273,
            "score_line": 273,
            "planned": 27,
            "actual": 25,
            "retake_count": 26,
            "ratio": 1.0,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "笔试：911单片机原理与应用                         \n参考教材：                                  \n（1）倪云峰等编著，《单片机原理与应用》.第2版.西安电子科技大学出版社.2020.\n（2）何宏等编著.《单片机原理及应用》.清华大学出版社.2022.\n（3）张仁彦等编著.《单片机原理及应用》.第2版.机械工业出版社.2024年."
          },
          {
            "name": "085407（专）仪器仪表工程",
            "avg": 328.0,
            "max": 387,
            "min": 271,
            "score_line": 271,
            "planned": 25,
            "actual": 18,
            "retake_count": 19,
            "ratio": 1.2,
            "note": null,
            "retake_code": "810.0",
            "retake_content": "笔试：911单片机原理与应用                         \n参考教材：                                  \n（1）倪云峰等编著，《单片机原理与应用》.第2版.西安电子科技大学出版社.2020.\n（2）何宏等编著.《单片机原理及应用》.清华大学出版社.2022.\n（3）张仁彦等编著.《单片机原理及应用》.第2版.机械工业出版社.2024年."
          }
        ]
      }
    ],
    "summary": {
      "avg": 321.2,
      "max": 402,
      "min": 271,
      "min_line": 271,
      "max_line": 275,
      "planned_total": 72,
      "actual_total": 47,
      "retake_people_total": 49
    },
    "retake_subjects": "笔试：911单片机原理与应用                         \n参考教材：                                  \n（1）倪云峰等编著，《单片机原理与应用》.第2版.西安电子科技大学出版社.2020.\n（2）何宏等编著.《单片机原理及应用》.清华大学出版社.2022.\n（3）张仁彦等编著.《单片机原理及应用》.第2版.机械工业出版社.2024年."
  },
  "西安邮电大学": {
    "colleges": [
      {
        "name": "通信与信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 327.0,
            "max": 413,
            "min": 268,
            "score_line": 265,
            "planned": 79,
            "actual": 103,
            "retake_count": 123,
            "ratio": 1.2,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "复试包括复试科目数字信号处理笔试和综合面试，总分300分；笔试满分150分，综合面试满分150分。\n参考教材：《数字信号处理及应用》卢光跃.人民邮电出版社.2022."
          },
          {
            "name": "0810J4（学）低空技术与工程",
            "avg": 319.0,
            "max": 376,
            "min": 289,
            "score_line": 264,
            "planned": 20,
            "actual": 7,
            "retake_count": 7,
            "ratio": 1.0,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "复试包括复试科目数字信号处理笔试和综合面试，总分300分；笔试满分150分，综合面试满分150分。\n参考教材：《数字信号处理及应用》卢光跃.人民邮电出版社.2022."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 394.0,
            "max": 434,
            "min": 365,
            "score_line": 365,
            "planned": 78,
            "actual": 81,
            "retake_count": 116,
            "ratio": 1.4,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "复试包括复试科目数字信号处理笔试和综合面试，总分300分；笔试满分150分，综合面试满分150分。\n参考教材：《数字信号处理及应用》卢光跃.人民邮电出版社.2022."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 390.0,
            "max": 441,
            "min": 361,
            "score_line": 360,
            "planned": 109,
            "actual": 116,
            "retake_count": 148,
            "ratio": 1.3,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "复试包括复试科目数字信号处理笔试和综合面试，总分300分；笔试满分150分，综合面试满分150分。\n参考教材：《数字信号处理及应用》卢光跃.人民邮电出版社.2022."
          },
          {
            "name": "085410（专）人工智能",
            "avg": 379.0,
            "max": 411,
            "min": 350,
            "score_line": 350,
            "planned": 28,
            "actual": 29,
            "retake_count": 38,
            "ratio": 1.3,
            "note": null,
            "retake_code": "824.0",
            "retake_content": "复试包括复试科目数字信号处理笔试和综合面试，总分300分；笔试满分150分，综合面试满分150分。\n参考教材：《数字信号处理及应用》卢光跃.人民邮电出版社.2022."
          }
        ]
      }
    ],
    "summary": {
      "avg": 361.8,
      "max": 441,
      "min": 268,
      "min_line": 264,
      "max_line": 365,
      "planned_total": 314,
      "actual_total": 336,
      "retake_people_total": 432
    },
    "retake_subjects": "复试包括复试科目数字信号处理笔试和综合面试，总分300分；笔试满分150分，综合面试满分150分。\n参考教材：《数字信号处理及应用》卢光跃.人民邮电出版社.2022."
  },
  "贵州大学": {
    "colleges": [
      {
        "name": "大数据与信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程-01 通信与信息系统方向",
            "avg": 327.4,
            "max": 375,
            "min": 293,
            "score_line": 293,
            "planned": 5,
            "actual": 7,
            "retake_count": 7,
            "ratio": 1.0,
            "note": null,
            "retake_code": "832.0",
            "retake_content": "笔试科目：信息与通信基础\n参考书目：\n1.《C程序设计》第5版.谭浩强.北京：清华大学出版社.2023.\n2.《通信原理》第7版.樊昌信,曹丽娜.北京：国防工业出版社.2013."
          },
          {
            "name": "081000（学）信息与通信工程-02 信号与信息处理",
            "avg": 346.7,
            "max": 428,
            "min": 305,
            "score_line": 299,
            "planned": 13,
            "actual": 27,
            "retake_count": 36,
            "ratio": 1.3,
            "note": null,
            "retake_code": "832.0",
            "retake_content": "笔试科目：信息与通信基础\n参考书目：\n1.《C程序设计》第5版.谭浩强.北京：清华大学出版社.2023.\n2.《通信原理》第7版.樊昌信,曹丽娜.北京：国防工业出版社.2013."
          }
        ]
      }
    ],
    "summary": {
      "avg": 337.0,
      "max": 428,
      "min": 293,
      "min_line": 293,
      "max_line": 299,
      "planned_total": 18,
      "actual_total": 34,
      "retake_people_total": 43
    },
    "retake_subjects": "笔试科目：信息与通信基础\n参考书目：\n1.《C程序设计》第5版.谭浩强.北京：清华大学出版社.2023.\n2.《通信原理》第7版.樊昌信,曹丽娜.北京：国防工业出版社.2013."
  },
  "重庆邮电大学": {
    "colleges": [
      {
        "name": "通信与信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 325.0,
            "max": 410,
            "min": 271,
            "score_line": 270,
            "planned": 231,
            "actual": 218,
            "retake_count": 268,
            "ratio": 1.6,
            "note": null,
            "retake_code": "801.0",
            "retake_content": "笔试科目：F011通信原理\n1.《通信原理》，张祖凡等编，电子工业出版社，2018，ISBN：9787121345296. \n2.《通信原理（第3版）》，周炯槃等编，北京邮电大学出版社，2008，ISBN：9787563518135. \n3.《通信原理》，蒋青等编，科学出版社，2014，ISBN：9787030406965."
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 375.7,
            "max": 436,
            "min": 343,
            "score_line": 343,
            "planned": 416,
            "actual": 138,
            "retake_count": 172,
            "ratio": 1.2,
            "note": null,
            "retake_code": "801.0",
            "retake_content": "笔试科目：F011通信原理\n1.《通信原理》，张祖凡等编，电子工业出版社，2018，ISBN：9787121345296. \n2.《通信原理（第3版）》，周炯槃等编，北京邮电大学出版社，2008，ISBN：9787563518135. \n3.《通信原理》，蒋青等编，科学出版社，2014，ISBN：9787030406965."
          },
          {
            "name": "085402（专）通信工程",
            "avg": 376.2,
            "max": 430,
            "min": 343,
            "score_line": 343,
            "planned": 416,
            "actual": 272,
            "retake_count": 327,
            "ratio": 1.2,
            "note": null,
            "retake_code": "801.0",
            "retake_content": "笔试科目：F011通信原理\n1.《通信原理》，张祖凡等编，电子工业出版社，2018，ISBN：9787121345296. \n2.《通信原理（第3版）》，周炯槃等编，北京邮电大学出版社，2008，ISBN：9787563518135. \n3.《通信原理》，蒋青等编，科学出版社，2014，ISBN：9787030406965."
          }
        ]
      },
      {
        "name": "重庆邮电大学远东联邦大学联合学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 304.0,
            "max": 304,
            "min": 304,
            "score_line": 264,
            "planned": 25,
            "actual": 1,
            "retake_count": 1,
            "ratio": 1.0,
            "note": null,
            "retake_code": "801.0",
            "retake_content": "笔试科目：F011通信原理\n1.《通信原理》，张祖凡等编，电子工业出版社，2018，ISBN：9787121345296. \n2.《通信原理（第3版）》，周炯槃等编，北京邮电大学出版社，2008，ISBN：9787563518135. \n3.《通信原理》，蒋青等编，科学出版社，2014，ISBN：9787030406965."
          }
        ]
      }
    ],
    "summary": {
      "avg": 345.2,
      "max": 436,
      "min": 271,
      "min_line": 264,
      "max_line": 343,
      "planned_total": 1088,
      "actual_total": 629,
      "retake_people_total": 768
    },
    "retake_subjects": "笔试科目：F011通信原理\n1.《通信原理》，张祖凡等编，电子工业出版社，2018，ISBN：9787121345296. \n2.《通信原理（第3版）》，周炯槃等编，北京邮电大学出版社，2008，ISBN：9787563518135. \n3.《通信原理》，蒋青等编，科学出版社，2014，ISBN：9787030406965."
  },
  "长安大学": {
    "colleges": [
      {
        "name": "信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 369.0,
            "max": 394,
            "min": 341,
            "score_line": 341,
            "planned": 12,
            "actual": 14,
            "retake_count": 18,
            "ratio": 1.3,
            "note": null,
            "retake_code": "814.0",
            "retake_content": "通信原理\n参考教材：官网未提供。；计算机基础编程能力机试；通信原理"
          },
          {
            "name": "082300（学）交通运输工程",
            "avg": 364.0,
            "max": 405,
            "min": 332,
            "score_line": 330,
            "planned": 15,
            "actual": 15,
            "retake_count": 20,
            "ratio": 1.3,
            "note": null,
            "retake_code": "814.0",
            "retake_content": "通信原理\n参考教材：官网未提供。；计算机基础编程能力机试；通信原理"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 393.0,
            "max": 414,
            "min": 374,
            "score_line": 373,
            "planned": 23,
            "actual": 23,
            "retake_count": 30,
            "ratio": 1.3,
            "note": null,
            "retake_code": "814.0",
            "retake_content": "通信原理\n参考教材：官网未提供。；计算机基础编程能力机试；通信原理"
          },
          {
            "name": "085410（专）人工智能",
            "avg": 363.5,
            "max": 417,
            "min": 309,
            "score_line": 309,
            "planned": 20,
            "actual": 20,
            "retake_count": 26,
            "ratio": 1.3,
            "note": null,
            "retake_code": "814.0",
            "retake_content": "通信原理\n参考教材：官网未提供。；计算机基础编程能力机试；通信原理"
          },
          {
            "name": "086100（专）交通运输",
            "avg": 382.0,
            "max": 400,
            "min": 365,
            "score_line": 362,
            "planned": 20,
            "actual": 20,
            "retake_count": 26,
            "ratio": 1.3,
            "note": null,
            "retake_code": "814.0",
            "retake_content": "通信原理\n参考教材：官网未提供。；计算机基础编程能力机试；通信原理"
          }
        ]
      }
    ],
    "summary": {
      "avg": 374.3,
      "max": 417,
      "min": 309,
      "min_line": 309,
      "max_line": 373,
      "planned_total": 90,
      "actual_total": 92,
      "retake_people_total": 120
    },
    "retake_subjects": "通信原理\n参考教材：官网未提供。；计算机基础编程能力机试；通信原理"
  },
  "长春工业大学": {
    "colleges": [
      {
        "name": "计算机科学与工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 320.0,
            "max": 345,
            "min": 301,
            "score_line": 301,
            "planned": 10,
            "actual": 3,
            "retake_count": 3,
            "ratio": 1.0,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "数字信号处理"
          },
          {
            "name": "085401（专）新一代电子信息技术",
            "avg": 308.0,
            "max": 381,
            "min": 264,
            "score_line": 264,
            "planned": 12,
            "actual": 12,
            "retake_count": 12,
            "ratio": 1.0,
            "note": null,
            "retake_code": "807.0",
            "retake_content": "数字信号处理"
          }
        ]
      }
    ],
    "summary": {
      "avg": 314.0,
      "max": 381,
      "min": 264,
      "min_line": 264,
      "max_line": 301,
      "planned_total": 22,
      "actual_total": 15,
      "retake_people_total": 15
    },
    "retake_subjects": "数字信号处理"
  },
  "长春理工大学": {
    "colleges": [
      {
        "name": "电子信息工程学院",
        "majors": [
          {
            "name": "080900（学）电子科学与技术",
            "avg": 319.0,
            "max": 353,
            "min": 275,
            "score_line": 275,
            "planned": 18,
            "actual": 4,
            "retake_count": 5,
            "ratio": 1.2,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "单片机应用系统设计；通信原理；自动控制原理"
          },
          {
            "name": "081000（学）信息与通信工程",
            "avg": 320.0,
            "max": 384,
            "min": 273,
            "score_line": 273,
            "planned": 88,
            "actual": 48,
            "retake_count": 57,
            "ratio": 1.2,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "单片机应用系统设计；通信原理；自动控制原理"
          },
          {
            "name": "081100（学）控制科学与工程",
            "avg": 304.0,
            "max": 347,
            "min": 273,
            "score_line": 273,
            "planned": 48,
            "actual": 11,
            "retake_count": 12,
            "ratio": 1.0,
            "note": null,
            "retake_code": "808.0",
            "retake_content": "单片机应用系统设计；通信原理；自动控制原理"
          }
        ]
      }
    ],
    "summary": {
      "avg": 314.3,
      "max": 384,
      "min": 273,
      "min_line": 273,
      "max_line": 275,
      "planned_total": 154,
      "actual_total": 63,
      "retake_people_total": 74
    },
    "retake_subjects": "单片机应用系统设计；通信原理；自动控制原理"
  },
  "长沙理工大学": {
    "colleges": [
      {
        "name": "物理与电子科学学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 327.0,
            "max": 401,
            "min": 281,
            "score_line": 264,
            "planned": 8,
            "actual": 14,
            "retake_count": 16,
            "ratio": 1.1,
            "note": null,
            "retake_code": "832.0",
            "retake_content": "通信原理"
          },
          {
            "name": "085400（专）电子信息（通信工程方向）",
            "avg": 361.0,
            "max": 398,
            "min": 306,
            "score_line": 264,
            "planned": 16,
            "actual": 17,
            "retake_count": 26,
            "ratio": 1.5,
            "note": null,
            "retake_code": "832.0",
            "retake_content": "通信原理"
          }
        ]
      }
    ],
    "summary": {
      "avg": 344.0,
      "max": 401,
      "min": 281,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 24,
      "actual_total": 31,
      "retake_people_total": 42
    },
    "retake_subjects": "通信原理"
  },
  "陕西理工大学": {
    "colleges": [
      {
        "name": "物理与电信工程学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 330.0,
            "max": 389,
            "min": 279,
            "score_line": 264,
            "planned": 36,
            "actual": 31,
            "retake_count": 53,
            "ratio": 1.7,
            "note": null,
            "retake_code": "838.0",
            "retake_content": "电子技术（含数字、模拟部分）；同等学力/跨专业加试：电路基础、微机原理。"
          }
        ]
      }
    ],
    "summary": {
      "avg": 330.0,
      "max": 389,
      "min": 279,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 36,
      "actual_total": 31,
      "retake_people_total": 53
    },
    "retake_subjects": "电子技术（含数字、模拟部分）；同等学力/跨专业加试：电路基础、微机原理。"
  },
  "集美大学": {
    "colleges": [
      {
        "name": "海洋信息工程学院",
        "majors": [
          {
            "name": "081000（学）信息与通信工程",
            "avg": 295.0,
            "max": 301,
            "min": 288,
            "score_line": 288,
            "planned": 19,
            "actual": 2,
            "retake_count": 2,
            "ratio": 1.0,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "考核内容范围：电子技术基础（含模电、数电）\n参考书目：\n1.《电子线路》（线性部分）第六版.冯军,谢嘉奎.高等教育出版社.2022.\n2.《电子技术基础》（数字部分）第七版.康华光,张林.高等教育出版社.2021."
          },
          {
            "name": "085400（专）电子信息",
            "avg": 330.0,
            "max": 396,
            "min": 294,
            "score_line": 280,
            "planned": 17,
            "actual": 23,
            "retake_count": 35,
            "ratio": 1.5,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "考核内容范围：电子技术基础（含模电、数电）\n参考书目：\n1.《电子线路》（线性部分）第六版.冯军,谢嘉奎.高等教育出版社.2022.\n2.《电子技术基础》（数字部分）第七版.康华光,张林.高等教育出版社.2021."
          }
        ]
      },
      {
        "name": "理学院",
        "majors": [
          {
            "name": "085400（专）电子信息（光电信息工程）",
            "avg": 314.0,
            "max": 350,
            "min": 264,
            "score_line": 264,
            "planned": 10,
            "actual": 8,
            "retake_count": 8,
            "ratio": 1.0,
            "note": null,
            "retake_code": "823.0",
            "retake_content": "考核内容参考书目：\n1.《激光原理及应用》第四版.陈家璧,彭润玲.电子工业出版.2019.\n2.《光电子技术》第三版.狄红卫.张永林.高等教育出版社.2021."
          }
        ]
      }
    ],
    "summary": {
      "avg": 313.0,
      "max": 396,
      "min": 264,
      "min_line": 264,
      "max_line": 288,
      "planned_total": 46,
      "actual_total": 33,
      "retake_people_total": 45
    },
    "retake_subjects": "考核内容范围：电子技术基础（含模电、数电）\n参考书目：\n1.《电子线路》（线性部分）第六版.冯军,谢嘉奎.高等教育出版社.2022.\n2.《电子技术基础》（数字部分）第七版.康华光,张林.高等教育出版社.2021.；考核内容参考书目：\n1.《激光原理及应用》第四版.陈家璧,彭润玲.电子工业出版.2019.\n2.《光电子技术》第三版.狄红卫.张永林.高等教育出版社.2021."
  },
  "黑龙江科技大学": {
    "colleges": [
      {
        "name": "电子与信息工程学院",
        "majors": [
          {
            "name": "085400（专）电子信息",
            "avg": 319.8,
            "max": 410,
            "min": 265,
            "score_line": 264,
            "planned": 25,
            "actual": 13,
            "retake_count": 14,
            "ratio": 1.1,
            "note": null,
            "retake_code": "816.0",
            "retake_content": "笔试科目：通信原理/数字信号处理/数据结构\n参考教材：\n①《通信原理》第7版.樊昌信,曹丽娜主编.国防工业出版社.2012.\n②《数字信号处理》第4版.丁玉美,高西全主编.西安电子科技大学出版社.2016.\n③1.《数据结构（C语言版）》严蔚敏.清华大学出版社.2023.\n2.《数据结构教程》第5版.李春葆.清华大学出版社.2021.\n3．《数据结构（C语言版）》胡学钢.高等教育出版社.2008."
          }
        ]
      }
    ],
    "summary": {
      "avg": 319.8,
      "max": 410,
      "min": 265,
      "min_line": 264,
      "max_line": 264,
      "planned_total": 25,
      "actual_total": 13,
      "retake_people_total": 14
    },
    "retake_subjects": "笔试科目：通信原理/数字信号处理/数据结构\n参考教材：\n①《通信原理》第7版.樊昌信,曹丽娜主编.国防工业出版社.2012.\n②《数字信号处理》第4版.丁玉美,高西全主编.西安电子科技大学出版社.2016.\n③1.《数据结构（C语言版）》严蔚敏.清华大学出版社.2023.\n2.《数据结构教程》第5版.李春葆.清华大学出版社.2021.\n3．《数据结构（C语言版）》胡学钢.高等教育出版社.2008."
  }
};
