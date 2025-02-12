import { getNavigationLinks } from "../models/index.js";

const getNav = async () => {
    const links = await getNavigationLinks();
    let nav = '<nav><ul>';
    links.forEach((row) => {
        nav += `<li><a href="${row.route}">${row.name}</a></li>`
    });
    return `${nav}</ul></nav>`;
};

export { getNav };