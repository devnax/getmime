import types from './types'

export const getType = (ext: string) => {
  if(types.hasOwnProperty(ext)){
    return (types as any)[ext]
  }
}

export const getExtention = (mime: string): any => {
  const mimes = Object.values(types)
  const index = mimes.indexOf(mime)
  if(index != -1){
    return Object.keys(types)[index]
  }
}