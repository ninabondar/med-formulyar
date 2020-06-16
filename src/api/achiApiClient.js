import {get} from './baseApiClient'

const PREFIX = '/achi'

const endpoints = {
    classes: "/classes",
    als: "/anatomic-localizaions",
    procedures: "/procedures",
    blocks: "/blocks",
    search: "/search",
    global: "/global",
};

const composePath = (paths) => paths.join('/')
const alsUrl = cId => composePath([endpoints.classes, cId, endpoints.als])
const proceduresUrl = (cId, alsId) => composePath([alsUrl(cId), alsId, endpoints.procedures])
const blocksUrl = (classId, alsId, pId) => composePath([proceduresUrl(classId, alsId), pId, endpoints.blocks])
const blocksByIdUrl = (bId) => composePath([endpoints.blocks, bId])

const getAchi = url => get(PREFIX + url);

export const getClasses = () => getAchi(endpoints.classes)
export const getAls = classId => getAchi(alsUrl(classId))
export const getProcedures = (cId, alId) => getAchi(proceduresUrl(cId, alId))
export const getBlocks = (cId, alId, pId) => getAchi(blocksUrl(cId, alId, pId))
export const getBlocksById = bId => getAchi(blocksByIdUrl(bId))
export const globalSearch = name => getAchi(`${endpoints.search}?name=${name}`)
export const blockSearch = (blockId, procedureId, alName) => {
    const blockQueryParam = blockId ? `blockId=${blockId}` : "";
    const procedureQueryParam = procedureId ? `procedureId=${procedureId}` : "";
    const alNameQueryParam = alName ? `alName=${alName}` : "";

    const queryParams = [blockQueryParam, procedureQueryParam, alNameQueryParam].filter(q => q).join('&')

    return get(`${PREFIX}${endpoints.search}?${queryParams}`)
}

