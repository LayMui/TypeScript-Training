export type SubmitRequest = {
  transactionId: string
  personal: {
    title: string
    driverFirstName: string
    driverLastName: string
    email: string,
    phone: string,
    previousAliases: {
     firstName: string,
     middleName: string, 
     lastName: string
    }[],
    gender: string, 
    dob: string, 
    birthCountry: string
  },
  payment: {
   creditCardToken: string,
  }

  
}

type PaymentRequest = SubmitRequest['payment']
type PreviousAliasRequest = SubmitRequest['personal']['previousAliases'][0]


