import data from '@/models/MyTextnDoc/index'
function fromToLabel(obj){
  let findObj = data.data.Lang.find(objj =>objj.name === obj)
  return findObj.label
}

export default fromToLabel