export default async function judgeStatus (state){
    if(!state.api){return}
    if(!state.account){return}
    return true
}
