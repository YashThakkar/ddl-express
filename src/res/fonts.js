import metrics from "./metrics";

const baseWidth = 380;

const size = {
    font_2 : metrics.screenWidth * (2/baseWidth),
    font_5 : metrics.screenWidth * (5/baseWidth),
    font_9 : metrics.screenWidth * (9/baseWidth),
    font_11 : metrics.screenWidth * (11/baseWidth),
    font_12 : metrics.screenWidth * (12/baseWidth),
    font_14 : metrics.screenWidth * (14/baseWidth),
    font_16 : metrics.screenWidth * (16/baseWidth),
    font_18 : metrics.screenWidth * (18/baseWidth),
    font_20 : metrics.screenWidth * (20/baseWidth),
    font_24 : metrics.screenWidth * (24/baseWidth),
    font_30 : metrics.screenWidth * (30/baseWidth),
    font_32 : metrics.screenWidth * (32/baseWidth),
};

const weight = {
    full:'900',
    semi:'600',
    low:'400',
    bold:'bold',
    normal:'normal'
}

const type = {
    light:'Roboto-Light',
    regular:'Roboto-Regular',
    medium:'Roboto-Medium',
    bold:'Roboto-Bold',
    regular2:'OpenSans-Regular',
    bold2:'arial-black'
}

export {
    size,
    weight,
    type
}