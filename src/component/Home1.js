import Aboutus from "./Aboutus";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
       <div>

          <Aboutus/>
 


        
       </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Technology used in this healthcare system
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tse4.mm.bing.net/th?id=OIP.IxViyGJCI1Y_474QKLr3WQHaC2&pid=Api&P=0&h=180"
            alt="Transistor"
            width={200}
            height={80}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://s.yimg.com/fz/api/res/1.2/DMfdhrO9JV3XIXn1OaYOcQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/4928bcfa-d4ce-33ec-b811-f6fd5c747a01/t_500x300"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://commerceda.com/images/material-ui-logo.png"
            alt="Reform"
            width={250}
            height={100}
          />
           
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://www.codebee.co.th/labs/wp-content/uploads/2017/03/firebase-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://uploads-ssl.webflow.com/5ebd54899f7ac255cd8e0950/60f96fadd08d1fecba632799_clKgcnC6mdB8OB6n3mexxcaH2dWVf4EuDbyyjsZRZXvBJVCEUSEZIrm-eCssXCWMJMMcW920RUZNyWOKDLLs3HtfglGVURgE7mGelzmnfzVdkRYmKdGgls26aiIGI-t5japVX_Dc.png"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}

