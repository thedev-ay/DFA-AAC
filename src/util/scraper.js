import * as cheerio from "cheerio";

const scrapeTimeslots = (html) => {
    const dom = cheerio.load(html);

    const timeslots = dom("label > span > input:not([disabled])").map(function () {
        return dom(this).next().next().text();
    }).get();

    return timeslots;
};

export {
    scrapeTimeslots,
};
