"use client"
import React from 'react';
import FirmList from '../../components/listOfFirms';
import SubscriptionBill from '@/components/payment';

const Subscription = () => {
  return (
    <div className=" mx-auto p-6">
    <FirmList />
    <SubscriptionBill/>
  </div>
  );
};

export default Subscription;
