export const SpeakerIdMap = {
    陈泽: 'Ze-Bert-VITS2-2.3',
    梅西: 'Messi-Bert-VITS2-2.3',
    '尼奈2.3': 'nine-Bert-VITS2-2.3',
    尼奈2: 'nine1-Bert-VITS2',
    科比: 'Kobe-Bert-VITS2-2.3',
    '嘉然2.3': 'Diana-Bert-VITS2-2.3',
    嘉然2: 'Diana-Bert-VITS2',
    炫神: 'Xuan-Bert-VITS2-2.3',
    永雏小菲: 'LittleTaffy-Bert-VITS2',
    '奶绿2.3': 'LAPLACE-Bert-VITS2-2.3',
    奶绿V2: 'LAPLACE-Bert-VITS2',
    '珈乐2.3': 'Carol-Bert-VITS2-2.3',
    珈乐2: 'Carol-Bert-VITS2',
    '电棍2.3': 'otto-Bert-VITS2-2.3',
    电棍2: 'otto-Bert-VITS2',
    '七海2.3': 'Nana7mi-Bert-VITS2-2.3',
    七海2: 'Nana7mi-Bert-VITS2',
    阿梓: 'Azusa-Bert-VITS2-2.3',
    '星瞳2.3': '2568-Bert-VITS2',
    星瞳2: 'XingTong-Bert-VITS2',
    向晚: 'Ava-Bert-VITS2',
    剑魔: 'Aatrox-Bert-VITS2',
    // "乃琳": ["Queen-Bert-VITS2-2.3"],
    贝拉: 'Bella-Bert-VITS2',
    扇宝: 'ShanBao-Bert-VITS2',
    '恬豆2.3': 'Bekki-Bert-VITS2',
    恬豆2: 'TianDou-Bert-VITS2',
    '黑桃影-Echo': 'Echo-Bert-VITS2',
    '黑桃影-Spade': 'Spade-Bert-VITS2',
    卖卖: 'maimai-Bert-VITS2',
    '鹿鸣-Lumi': 'Lumi-Bert-VITS2',
    '鹿鸣-yoyo': 'yoyo-Bert-VITS2',
    文静: 'Wenjing-Bert-VITS2',
    '东雪莲2.3': 'Azuma-Bert-VITS2-2.3',
    '东雪莲2.0.2': 'Azuma-Bert-VITS2.0.2',
    东雪莲2: 'Azuma-Bert-VITS2',
    '永雏塔菲2.3': 'Taffy-Bert-VITS2-2.3',
    '永雏塔菲1.2': 'Taffy1.2-Bert-VITS2',
    永雏塔菲2: 'Taffy-Bert-VITS2',
    坏女人星瞳: 'badXT-Bert-VITS2-2.3',
    '丁真-DZ': 'DZ-Bert-VITS2-2.3',
    '丁真-dingzhen': 'dingzhen-Bert-VITS2-2.3',
    '丁真-DZhen': 'DZhen-Bert-VITS2-2.3',
    孙笑川: 'SXC-Bert-VITS2'
}

// 颠倒 key-value 顺序
export const nameMap = Object.fromEntries(
    Object.entries(SpeakerIdMap).map(([k, v]) => [v, k])
)

const baseSpeakId = 114514

export const SpeakerKeyIdMap = Object.entries(SpeakerIdMap).map(
    ([k, v], index) => [k, baseSpeakId + index + 1]
)

export const Language = ['ZH', 'JP', 'EN', 'AUTO', 'MIX']
