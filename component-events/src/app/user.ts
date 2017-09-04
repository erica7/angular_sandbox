export class User {
  constructor(
    public id: number = null,
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public passwordConfirmation: string = '',
    public streetAddress: string = '',
    public unitNum: string = '',
    public city: string = '',
    public state: string = '',
    public feeling: boolean = true,
  ){}
}
