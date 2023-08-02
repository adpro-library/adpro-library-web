export interface FirstFormInputs {
  username: string
  name: string
  password: string
}

export interface UsernameAvailabilityResponse {
  message: string
  data: {
    status: boolean
  }
}
