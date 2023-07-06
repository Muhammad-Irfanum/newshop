// controllers/paymentController.js

import request from 'request';

export const processPayment = (req, res) => {
  const { amount, orderId } = req.body;

  const options = {
    method: 'POST',
    url: 'https://easypay.easypaisa.com.pk/easypaymentservices/TransactionDetailAPI/transactionDetail.do',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    },
    body: JSON.stringify({
      amount: amount,
      orderRefNum: orderId,
      storeId: '1431',
    }),
  };

  request(options, (error, response, body) => {
    if (error) {
      res.status(500).json({ error: 'An error occurred' });
    } else {
      const result = JSON.parse(body);
      if (result.responseCode === '0000') {
        res.status(200).json({ message: 'Payment request successful', paymentUrl: result.paymentURL });
      } else {
        res.status(400).json({ error: result.responseMessage });
      }
    }
  });
};
