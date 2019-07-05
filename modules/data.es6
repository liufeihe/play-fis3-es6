const getDataSync = ()=>{
    return 'hello java';
}

const getDataAsync = ()=>{
   return new Promise((reslove, reject)=>{
       setTimeout(()=>{
           reslove('hello javascipt.')
       }, 3000)
   })
}

export {getDataSync, getDataAsync}