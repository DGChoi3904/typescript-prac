"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UserInfo에 사용자를 추가하는 Query문. 사용자 정보를 UserInfo에 추가하는 쿼리문을 반환한다.
 * @param {string} uid 유저 아이디
 * @param {string} pwd 유저 암호
 * @param {string} uEmail 유저 이메일
 * @param {string} uName 유저 닉네임
 * @returns {string} UserInfo에 새로운 행을 추가하는 쿼리문
 */
function createUser(uid, pwd, uEmail, uName) {
    return "INSERT INTO userinfo ( `user-id`, `user-pwd`, `user-email`, `user-name`) VALUES ('".concat(uid, "', '").concat(pwd, "', '").concat(uEmail, "', '").concat(uName, "')");
}
/**
 * UserInfo에서 모든 유저정보를 가져오는 Query문
 * @returns {string} UserInfo의 모든 정보를 출력하라는 쿼리문
 */
function readAll() {
    return "SELECT * FROM userinfo";
}
/**
 * UserInfo에서 uid를 기준으로 사용자 정보를 출력하는 Query문
 * @param {string} uid 유저 아이디. 검색용
 * @returns {string} SELECT *  WHERE user-id = `uid` 쿼리문
 */
function readUser(uid) {
    return "SELECT * FROM userinfo WHERE `user-id`='".concat(uid, "'");
}
// 
/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 패스워드를 업데이트하는 Query문
 * @param {string} uid 유저 아이디. 검색용
 * @param {string} pwd 새로운 비밀번호.
 * @returns {string} 비밀번호를 바꾸는 쿼리문
 */
function updatePassword(uid, pwd) {
    return "UPDATE userinfo SET pwd = '".concat(pwd, "' WHERE `user-id` = '").concat(uid, "'");
}
/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 Email을 업데이트하는 Query문
 * @param {string} uid 유저 아이디, 검색용
 * @param {string} uEmail 새로운 이메일주소
 * @returns {string} 이메일주소를 바꾸는 쿼리문
 */
function updateEmail(uid, uEmail) {
    return "UPDATE userinfo SET `user-email` = '".concat(uEmail, " WHERE `user-id` = '").concat(uid, "'");
}
/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 닉네임을 업데이트하는 Query문
 * @param {string} uid 유저 아이디, 검색용
 * @param {string} uName 새로운 닉네임
 * @returns {string} 닉네임을 바꾸는 쿼리문
 */
function updateName(uid, uName) {
    return "UPDATE userinfo SET `user-name` = '".concat(uName, " WHERE `user-id` = '").concat(uid, "'");
}
/**
 * UserInfo에서 사용자를 삭제하는 Query문
 * @param {string} uid 삭제할 유저의 아이디.
 * @returns {string} 해당 유저 행을 삭제하는 쿼리문
 */
function deleteUser(uid) {
    return "DELETE FROM userinfo WHERE `user-id`='".concat(uid, "'");
}
// 모듈로 export할시 default로 나가는 함수들 구문
exports.default = { createUser: createUser, readAll: readAll, readUser: readUser, updatePassword: updatePassword, updateEmail: updateEmail, updateName: updateName, deleteUser: deleteUser };
