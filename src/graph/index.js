/* eslint-disable */
import $ from 'jquery'
import {message} from "antd";
import develop from "../env"

function upload() {

}

const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
}
const fetchQueryUrl = (path, params, variables) => {
    const body = JSON.stringify({
        query: params.text, // GraphQL text from input
    })
    const response = fetch( path, {
        method: 'POST',
        headers,
        body,
    }).then((res) => res.json())
    return response
}
const fetchQueryBase = (path, params, variables) => {
    const subgraphUrl = develop.graphUrlBase
    const body = JSON.stringify({
        query: params.text, // GraphQL text from input
    })
    const response = fetch(subgraphUrl + path, {
        method: 'POST',
        headers,
        body,
    }).then((res) => res.json())
    return response
}
const fetchQuery = (path, params, variables) => {
    //juicebox
    const subgraphUrl = develop.graphUrl
    const body = JSON.stringify({
        query: params.text, // GraphQL text from input
    })
    const response = fetch(subgraphUrl + path, {
        method: 'POST',
        headers,
        body,
    }).then((res) => res.json())
    return response
}

export {
    fetchQuery,
    fetchQueryBase,
    fetchQueryUrl
}

