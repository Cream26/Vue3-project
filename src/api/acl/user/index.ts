//用户管理模块的接口
import request from '@/utils/request'
import type {
  UserResponseData,
  User,
  AllRoleResponseData,
  SetRoleData,
} from './type'
enum API {
  ALLUSER_URL = '/admin/acl/user/',
  ADDUSER_URL = '/admin/acl/user/save',
  UPDATEUSER_URL = '/admin/acl/user/update',
  //获取全部职位,当前账号拥有的职位接口
  ALLROLEURL = '/admin/acl/user/toAssign/',
  //给已有的用户分配角色接口
  SETROLE_URL = '/admin/acl/user/doAssignRole',
  //删除某一个账号
  DELETEUSER_URL = '/admin/acl/user/remove/',
  //批量删除的接口
  DELETEALLUSER_URL = '/admin/acl/user/batchRemove',
}
export const reqUserInfo = (page: number, limit: number, username: string) =>
  request.get<any, UserResponseData>(
    API.ALLUSER_URL + `${page}/${limit}/?username=${username}`,
  )
export const reqAddOrUpdateUser = (data: User) => {
  if (data.id) {
    return request.put<any, any>(API.UPDATEUSER_URL, data)
  } else {
    return request.post<any, any>(API.ADDUSER_URL, data)
  }
}
//获取全部职位以及包含当前用户的已有的职位
export const reqAllRole = (userId: number) =>
  request.get<any, AllRoleResponseData>(API.ALLROLEURL + userId)
//分配职位
export const reqSetUserRole = (data: SetRoleData) =>
  request.post<any, any>(API.SETROLE_URL, data)
//删除某一个账号的信息
export const reqRemoveUser = (userId: number) =>
  request.delete<any, any>(API.DELETEUSER_URL + userId)
//批量删除的接口
export const reqSelectUser = (idList: number[]) =>
  request.delete(API.DELETEALLUSER_URL, { data: idList })
