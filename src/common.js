
let result = {code: 0,message: "",data:{},meta:{}}

module.exports = {
  success: function(data){
    result.code = 0
    result.message = "success"
    result.data = data
    return result
  },
  successWithMeta: function(data,meta){
    result.code = 0
    result.message = "success"
    result.data = data
    result.meta = meta
    return result
  },
  error: function(message){
    result.code = 500
    result.message = message
    result.data = {}
    return result
  },
}