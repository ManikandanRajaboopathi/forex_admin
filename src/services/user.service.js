import React from 'react';
import axios from 'axios';
import http_common from '../http_common';
 
    const userLogin = async(data)=>{
        try {
            console.log("responsebefore",data);
            let response = await axios.post(`${http_common}admin/login`, data)
            console.log("APiresponse",response.data);
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }

    const userRegister = async(data)=>{
        try {
            console.log("responsebeforeregister",data);
            let response = await axios.post(`${http_common}user/register`, data)
            console.log("response",response.data);
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }

    const forgotPassword = async(data)=>{
        console.log("responsebeforeforget-password",data);
        try {
            let response = await axios.post(`${http_common}user/forget-password`, data)
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }

    const resetPassword = async(data)=>{
        try {
            console.log("responsebeforereset-password",data);
            let response = await axios.post(`${http_common}user/reset-password`, data)
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }


    const verifyAccount = async(data)=>{
        try {
            console.log("responsebeforeverify-account",data);
            let response = await axios.post(`${http_common}user/verify-account`, data)
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }
    const getUserList = async(data)=>{
        try {
            let response = await axios.post(`${http_common}user/getUserList`, data)
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }
    const createFaq = async(data)=>{
        try {
            let response = await axios.post(`${http_common}admin/add-faq`, data)
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }
    const updatePrivacy = async(data)=>{
        try {
            let response = await axios.put(`${http_common}admin/update-cms`, data)
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }
    const getCms = async(data)=>{
        try {
            let response = await axios.get(`${http_common}admin/get-cms/${data}`, data)
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }

    const getFaq = async(data)=>{
        try {
            let response = await axios.get(`${http_common}admin/get-faq-lists`,)
            return response.data        
        } catch (error) {
            return {
                status : false,
                message : error.message ? error.message : "Some error occured",
                data : null
            }
        }
    }

 export default  {
    userLogin,userRegister,forgotPassword,resetPassword,verifyAccount, getUserList,
    createFaq, updatePrivacy, getCms, getFaq
 }