// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDatabase from "../../../../Api_Rest/database";

export default function handler(req,res) {
  connectDatabase().catch(()=> res.status(405).json({error:"Error in the Connection"}))
  
  //type of request
  const{method}=req

  switch(method){
    case'GET':
      res.status(200).json({method,name:'GET Request'});
      break;

      case'POST':
      res.status(200).json({method,name:'POST Request'});
      break;

      case'PUT':
      res.status(200).json({method,name:'PUT Request'});
      break;

      case'DELETE':
      res.status(200).json({method,name:'DELETE Request'});
      break;
  }
  res.status(200).json({ name: "John Doe" });
}
