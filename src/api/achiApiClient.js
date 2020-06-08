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
const getAchi = url => get(PREFIX + url);

export const getClasses = () => getAchi(endpoints.classes)
export const globalSearch = name => getAchi(`${endpoints.search}?name=${name}`)
export const getAls = classId => getAchi(`${endpoints.classes}/${classId}/${endpoints.als}`)
export const getProcedures = (cId, alId) => getAchi(`${endpoints.classes}/${cId}/${endpoints.als}/${alId}/${endpoints.procedures}`)
export const getBlocks = (cId, alId, pid) => getAchi(`${endpoints.classes}/${cId}/${endpoints.als}/${alId}/${endpoints.procedures}/${pid}/${endpoints.blocks}`)
export const getBlocksById = bId => getAchi(`${endpoints.blocks}/${bId}`)

export const blockSearch = (blockId, procedureId, alName) => {
    const blockQueryParam = blockId ? `blockId=${blockId}` : "";
    const procedureQueryParam = procedureId ? `procedureId=${procedureId}` : "";
    const alNameQueryParam = alName ? `alName=${alName}` : "";

    const queryParams = [blockQueryParam, procedureQueryParam, alNameQueryParam].filter(q => q).join('&')

    return get(`${PREFIX}${endpoints.search}?${queryParams}`)
}

