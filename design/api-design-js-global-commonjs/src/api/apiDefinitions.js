///<reference path='./globals.d.ts' />
/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore - version 1.0.7
 *
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key &#x60;special-key&#x60; to test the authorization filters.
 *
 * OpenAPI version: 3.0.0
 *
 * Contact:
 *
 * NOTE: This file is auto generated by the alova's vscode plugin.
 *
 * https://alova.js.org/devtools/vscode
 *
 * **Do not edit the file manually.**
 */
/**
 * @typedef {'pet.uploadFile' | 'pet.addPet' | 'pet.updatePet' | 'pet.findPetsByStatus' | 'pet.findPetsByTags' | 'pet.getPetById' | 'pet.updatePetWithForm' | 'pet.deletePet' | 'store.getInventory' | 'store.placeOrder' | 'store.getOrderById' | 'store.deleteOrder' | 'user.createUsersWithListInput' | 'user.getUserByName' | 'user.updateUser' | 'user.deleteUser' | 'user.loginUser' | 'user.logoutUser' | 'user.createUsersWithArrayInput' | 'user.createUser'} ApiEndpointKey
 */
/**
 * @type {Record<ApiEndpointKey, [string,string]>}
 */
module.exports = {
  'pet.uploadFile': ['POST', '/pet/{petId}/uploadImage'],
  'pet.addPet': ['POST', '/pet'],
  'pet.updatePet': ['PUT', '/pet'],
  'pet.findPetsByStatus': ['GET', '/pet/findByStatus'],
  'pet.findPetsByTags': ['GET', '/pet/findByTags'],
  'pet.getPetById': ['GET', '/pet/{petId}'],
  'pet.updatePetWithForm': ['POST', '/pet/{petId}'],
  'pet.deletePet': ['DELETE', '/pet/{petId}'],
  'store.getInventory': ['GET', '/store/inventory'],
  'store.placeOrder': ['POST', '/store/order'],
  'store.getOrderById': ['GET', '/store/order/{orderId}'],
  'store.deleteOrder': ['DELETE', '/store/order/{orderId}'],
  'user.createUsersWithListInput': ['POST', '/user/createWithList'],
  'user.getUserByName': ['GET', '/user/{username}'],
  'user.updateUser': ['PUT', '/user/{username}'],
  'user.deleteUser': ['DELETE', '/user/{username}'],
  'user.loginUser': ['GET', '/user/login'],
  'user.logoutUser': ['GET', '/user/logout'],
  'user.createUsersWithArrayInput': ['POST', '/user/createWithArray'],
  'user.createUser': ['POST', '/user']
};
