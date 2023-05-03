import { NgFor, registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, subscribeOn, Subscription } from 'rxjs';
import { AccountService } from './accounts.service';
import { CustomValidators } from './custom-validators';
import { UserService } from './users.service';
import localAr from '@angular/common/locales/ar-EG';
import { formatDate } from '@angular/common';
registerLocaleData(localAr)
interface student {
  id: number,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

shouldIShow() {
throw new Error('Method not implemented.');
}

//    click on the button to add a server and click on the created
// server to remove it training

// servers: any[] = [];
// onAddServers() {
//   this.servers.push('Another Server');
// }
// onRemoveServer(id: number) {
// const position = id;
// this.servers.splice(position, 1)
// }

//    click on the button to add a server and click on the created
// server to remove it training


// <!-- blue print And newServer cockpit -->
// serverElements = [{type: 'blueprint', name: 'testserver', content: 'just a test'}]
// onServerAdded(ServerData: {serverName:string, serverContent:string}) {
//   this.serverElements.push({
//     type: 'server',
//     name: ServerData.serverName,
//     content: ServerData.serverContent,
//   })
// }
// onBluePrintAdded(bluePrintData: {serverName:string, serverContent:string}) {
//   this.serverElements.push({
//     type: 'blueprint',
//     name: bluePrintData.serverName,
//     content: bluePrintData.serverContent,
//   })
// }


// blueprint
box:any[] = [{type: 'blueprint', name: 'testserver', content: 'just a test'}];
inputName = '';
inputContent = '';

onServerAdded (dataFromDolarSign: {name:string, content:string}) {
  this.box.push({
    type: 'server',
    name: dataFromDolarSign.name,
    content: dataFromDolarSign.content,
  })
}

onBluePrintAdded (dataFromDolarSign2: {name:string, content:string}) {
  this.box.push({
    type: 'blueprint',
    name: dataFromDolarSign2.name,
    content: dataFromDolarSign2.content,
  })
}

onChangeFirst() {
this.box[0].name = 'changed';
}
onDestroyFirst() {
this.box.splice(0,1)
}

// assingment start of even and odd
oddBox:number[] = []
EvenBox:number[] = []
receive (e:number) {
if(e % 2 === 0) {
this.EvenBox.push(e)
}else {
  this.oddBox.push(e)
}
}


// project
// loadedFeature = 'reipe';
// onNavigate(feature: any) {
// this.loadedFeature = feature;
// }


item = 'left';
receiv(feature:string) {
this.item = feature

}















// project training
theType:string = 'shoppingList';
receiveTheType (recieved:string) {
this.theType = recieved;
}

receivedFruit(received:any) {
console.log(received)
}









// <!-- recap on ngif & ngfor -->
// numbers:number[] = [1, 2, 3, 4, 5];
oddNumbers:number[] = [1, 3, 5]
evenNumbers:number[] = [2, 4]
onlyOdd:boolean = false;
value = 128733216531367;





nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
ShowTheEven:boolean = false
val:number | string = 10





// account

// accounts = [
//   {
//     name: 'master account',
//     status: 'active'
//   },
//   {
//     name: 'test account',
//     status: 'inactive'
//   },
//   {
//     name: 'hidden account',
//     status: 'unknown'
//   },
// ]
// onAccountAdded(newAccount: {name: string, status: string}) {
//   this.accounts.push(newAccount)
// }
// onstatusChange(updateInfo: {id: number, newStatus: string}) {
//   this.accounts[updateInfo.id].status = updateInfo.newStatus
// }


// accounts: {name: string, status: string}[] = [];
// constructor(private accountService: AccountService) {}
// ngOnInit() {
//   this.accounts = this.accountService.accounts;
// }



boxx: any = [{typ:'serv', nam: 'Aya', conten: 'lets play'}]

BoldAdd(Data:{nam: string, conten: string}) {
  this.boxx.push({
    typ: 'bold',
    nam: Data.nam,
    conten: Data.conten,
  })
}
ItallicAdd(Datas:{nam: string, conten: string}) {
  this.boxx.push({
    typ: 'Itallic',
    nam: Datas.nam,
    conten: Datas.conten,
  })
}




rec (e:any) {
this.boxx.push(e)
}






// <button (click)="onBoldAdd()" class="btn btn-primary">add bold</button>
// <button (click)="onItallicAdd()" class="btn btn-danger">add italic</button>
// <div >
//   <div>{{items.nam}}</div>
//   <strong *ngIf="items.typ === 'bold' "
//     [ngStyle]="{backgroundColor:items.typ === 'bold' ? 'blue' : 'red' }">{{items.conten}}</strong>
//   <em *ngIf="items.typ !== 'bold' "
//     [ngStyle]="{backgroundColor:items.typ !== 'bold' ? 'red' : 'blue' }">{{items.conten}}</em>
// </div>



// account
// i took this part to the account[service] file
// accounts = [
//   {
//     name: 'master account',
//     status: 'active'
//   },
//   {
//     name: 'test account',
//     status: 'inactive'
//   },
//   {
//     name: 'hidden account',
//     status: 'unknown'
//   },
// ]

// even
// AccountDetailsReceived(neww: {name: string, status: string}) {
// this.accounts.push(neww)
// console.log('a server was changed, new status' + status)
// }

// replace it
accounts: {name:string, status: string}[] = []


constructor(private accountsService: AccountService, private userService: UserService,private http: HttpClient,private fb: FormBuilder ) {
  this.students = [
    {id: 1, name: 'ali'},
    {id: 2, name: 'ahmed'},
    {id: 3, name: 'mostafa'},
  ]
this.colors = ['red', 'blue', 'green']

setTimeout(() => {
  console.log(this.theNumber.nativeElement.value)
}, 3000);

console.log(formatDate(this.time,'y-MMMM/d-EEEE-a-h-s-z','en-US'))


  this.datas = [
    {name: 'ali', age: 22, speed: 10},
    {name: 'ahmed', age: 20, speed: 13},
    {name: 'osama', age: 21, speed: 12},
  ]

  setTimeout(() => {
    this.datas.push( {name: 'ali', age: 22, speed: 10})
  }, 3000);



this.profileForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: 'l name',
      email: ['',[Validators.email,Validators.pattern('.*com')]],
      address : fb.group({

        city: 'c',
        street: 's',
    })
})
this.profileForm.valueChanges.subscribe(changes =>{
  console.log('changes',this.email)
  if(isNaN(changes.lastName)) {
    this.profileForm.patchValue({
      lastName: changes.lastName.replace(/[a-zA-z]/g, '')
    })
  }
})




this.schoolform = this.createFormItem('init')



const updateData = {

  schoolName: 'school name',
  totalStudentsCount: 30,
  classRooms: [{
    StudentsCount: 30,
    classRoomNumber: 1,
    subjects: [{
      subjectName: 'subject 1',
      StudentsCount: 5

    }],
  }],

}




}

get email() {
  return this.profileForm.get('email');
}


AddAnotherStudent() {
  this.students = [
    {id: 1, name: 'ali'},
    {id: 2, name: 'ahmed'},
    {id: 3, name: 'mostafa'},
    {id: 4, name: 'mohamed'},
  ]
}
track(index: number, student: student) {
  return student.id;
}
// ngOnInit() {
//   this.accounts = this.accountsService.accounts
// }
// odd


// onCreateAccount(accountName: string, accountStatus: string) {
//   this.accounts.push({
//     name: accountName,
//     status: accountStatus,
//   })
// console.log('a server was changed, new status' + accountStatus)
// }

// odd

// onsetTo(status:string) {
// console.log('a server was changed, new status' + status)
// }



// assignmnent 4

// activeUsers = ['Max', 'Anna'];
// inactiveUsers = ['Chris', 'Manu'];

// onSetToInactive(id: number) {
//   this.inactiveUsers.push(this.activeUsers[id])
//   this.activeUsers.splice(id, 1)
// }
// onSetToActive(id: number) {
//   this.activeUsers.push(this.inactiveUsers[id])
//   this.inactiveUsers.splice(id, 1)
// }



// activeUsers = ['Max', 'Anna'];
// inactiveUsers = ['Chris', 'Manu'];

// inactiveVal(id: number) {
// this.activeUsers.push(this.inactiveUsers[id])
// this.inactiveUsers.splice(id,1)
// }
// activeVal(id: number) {
// this.inactiveUsers.push(this.inactiveUsers[id])
// this.activeUsers.splice(id,1)
// }

send:any
sendToOdd (data:any) {
console.log('from app comp' + data)
this.send = data
}
userActivated: boolean = false;
// ngOnInit() {
//   this.accounts = this.accountsService.accounts
//   this.activatedSub = this.userService.activatedEmitter.subscribe((didActivate:boolean) => {
//     this.userActivated = didActivate
//   })
// }
private activatedSub: Subscription = new Subscription
ngOnDestroy(){
  this.activatedSub.unsubscribe()
}



// forms
// suggestUserName() {
  // const suggestedName = 'superuser'
  // this.signUpForm.setValue({
  //   userGroup: {
  //     username: suggestedName,
  //     email: "",
  //   },
  //   secret: 'pet',
  //   questionAnswer: '',
  //   gender: 'male',
  // })
  // OR
  // this.signUpForm.form.patchValue({
  //   userGroup: {
  //     username: suggestedName,
  //   }
  // })
// }
// onsubmit (form: HTMLFormElement) {
// onsubmit (form: NgForm) {
//   console.log(form)
// }

//   @ViewChild('f')
//   signUpForm!: NgForm;
//   defaultQuestion:string = 'pet'
//   answer:string = '';
//   genders = ['male', 'female'];
//   user = {
//     username: '',
//     email: '',
//     secretQuestion: '',
//     answer: '',
//     gender: '',
//   }
//   submitted: boolean = false
// onsubmit () {
//  console.log(this.signUpForm)
//  this.submitted = true
//  this.user.username = this.signUpForm.value.userGroup.username
//  this.user.email = this.signUpForm.value.userGroup.email
//  this.user.secretQuestion = this.signUpForm.value.secret
//  this.user.answer = this.signUpForm.value.questionAnswer
//  this.user.gender = this.signUpForm.value.gender

//  this.signUpForm.reset({
//     userGroup: {
//       username: 'you submitted it',
//       email: "you submitted it",
//     },
//     secret: 'you submitted it',
//     questionAnswer: 'you submitted it',
//     gender: 'you submitted it',
//   }
//   )
// }





// signupForm!: FormGroup;
signupForm: FormGroup = new FormGroup({});

genders:string[] = ['male', 'female'];
forbiddenUserNames = ['chris', 'anna']
onSumbit() {
  console.log(this.signupForm)
  this.signupForm.reset()
}
onAddHobby() {
  const control = new FormControl(null, Validators.required);
(<FormArray>this.signupForm.get('hobbies')).push(control)
}
getControls() {
  return (<FormArray>this.signupForm.get('hobbies')).controls
}
// get controls() {
//   const control = new FormControl(null, Validators.required)
// return (this.signupForm.get('hobbies') as FormArray).controls;
// }

forbiddenNames(control: FormControl): {[s: string]: boolean} | null {
  if (this.forbiddenUserNames.indexOf(control.value,0) !== -1) {
    return {'nameIsForbidden': true};
  }
  return null;
  // return {'null': false};
}
forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise<any>((resolve, reject) =>{
    setTimeout(() => {
      if (control.value === 'test@test.com') {
        resolve({'emailIsForbidden': true});
      } else {
        resolve(null);
      }
    }, 1500);
  })
  return promise;
}

// assignmnent form start
  projectForm: FormGroup = new FormGroup({});

  onSaveProject() {
    console.log(this.projectForm.value)
  }
  word:string[] = ['All','Stable', 'Offline']
  counter: number = 0;
  x: string = 'heloo'
ngOnInit() {


    for (let i = 0; i<this.word.length;i++) {
      setTimeout(() => {
        console.log( 'this.word[i]' + this.word[i])
        return this.x = this.word[i]
      }, 1000);
    }


  this.signupForm = new FormGroup({
    'userData': new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      // 'username': new FormControl(null, Validators.required),
      // 'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    }),
    'gender': new FormControl('male'),
    'hobbies': new FormArray([]),
  })



  this.projectForm = new FormGroup({
    // 'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName.bind),
    'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'projectStatus': new FormControl('critical'),
  })



  this.accounts = this.accountsService.accounts
  this.activatedSub = this.userService.activatedEmitter.subscribe((didActivate:boolean) => {
    this.userActivated = didActivate
  })



  this.signupForm.statusChanges.subscribe(
    (value) => console.log(value)
  )
  // this.signupForm.setValue({
  //   'userData': {
  //     'username': 'max',
  //     'email': 'max@test.com',
  //   },
  //   'gender': 'male',
  //   'hobbies': [],
  // })
  this.signupForm.patchValue({
'gender': 'female'
  })



}

appStatus = new Promise((resolve, reject)=> {
  setTimeout(()=>{
    resolve('stable')
  },2000)
});




servers = [
  {
    instanceType: 'medium',
    name: 'production',
    status: 'stable',
    started: new Date(15, 1, 2017),
  },
  {
    instanceType: 'large',
    name: 'user database',
    status: 'stable',
    started: new Date(15, 1, 2017),
  },
  {
    instanceType: 'small',
    name: 'development server',
    status: 'offline',
    started: new Date(15, 1, 2017),
  },
  {
    instanceType: 'small',
    name: 'testing environment server',
    status: 'stable',
    started: new Date(15, 1, 2017),
  },
]

filteredStatus = ''

getStatusClasses(server: {instanceType: string, name:string, status: string, started: Date}) {
return {
  'list-group-item-success': server.status === 'stable',
  'list-group-item-warning': server.status === 'offline',
  'list-group-item-danger': server.status === 'critical'
}
}
onAddServer() {
  this.servers.push({
      instanceType: 'small',
      name: 'New server',
      status: 'stable',
      started: new Date(15, 1, 2023),
  })
}
theSelected:any = '';



// sending a post request
@ViewChild('f') sendData!: NgForm;
onSubmitted() {
  // console.log(this.sendData)
}

loadedPosts = [];
onCreatePost(postData: {title: any, content: any}) {
  //send http request
  console.log( postData)
// this.http.post('https://ng-complete-guide-1fa39-default-rtdb.firebaseio.com/posts.json',
//  postData
//  ).subscribe(resonseData => {
//   console.log(resonseData)
//  })
}
onFetchPost(

) {
  //send http request
}


writing: string = '';
isActive: boolean = false


students: student[] = []

colors: string[] = []
selectedColor: string =''
phone: any = ''
call(phoneNumber: any) {
console.log(phoneNumber)
}
@ViewChild('phone') theNumber!: ElementRef<HTMLInputElement>

itemm: any = {id: 1};

fillColor = 'rgb(255,0,0)'
changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  this.fillColor = `rgb(${r},${g},${b})`
}

hello(event: KeyboardEventInit) {
  console.log(event)
}
print() {
console.log('hello from print')

}

theNum: string[] = []
@ViewChild ('theNum') TheNuma!: ElementRef<HTMLInputElement>
nus:string[] = []
onAddNumber(number: string) {
  if (this.nus.includes(number)) {
   number = ''
   this.TheNuma.nativeElement.value = ''
 }
 if (number !== '') {
   this.nus.push(number)
   number = ''
   this.TheNuma.nativeElement.value = ''
  }
  console.log('this.TheNuma.nativeElement.value' + this.TheNuma.nativeElement.value)
  console.log('number' + number)
}
test: string = 'hello from test'
haha: number[] = [1,2,3,4,5,6,7,8,9,10]
dname: any = ''
object: object = {a: 'ac',b: 'bc', numbers: [1,2,3,4,5]}
time = new Date()

datas!:any



favouriteColorControl = new FormControl();
favouriteColor = '';


namee = new FormControl()

profileForm : FormGroup;


// profileForm = new FormGroup({
//   firstName: new FormControl(),
//   lastName: new FormControl(),
//   address : new FormGroup({

//     city: new FormControl(),
//     street: new FormControl(),
//   })
// })


updateName() {
 this.namee.setValue('hello mf')
}

onsubm() {
  console.log(this.profileForm.value)
}

// updateForm() {
//   this.profileForm.patchValue({
//     firstName: 'mona',
//     lastName: 'ali',
//   })
// }

updateForm() {
  this.profileForm.setValue({
    firstName: 'mona',
    lastName: 'ali',
    address: {
      city: 'alex',
      street: '45',
    }
  })
}


schoolform: FormGroup;


createFormItem(itemtype: string): FormGroup {
  let formItem: FormGroup = this.fb.group({});
switch (itemtype) {
  case 'init':
    formItem = this.fb.group({
      schoolName: '',
      totalStudentsCount: '',
      classRooms: this.fb.array([])
    });
    break;
    case 'classRoom':
      formItem = this.fb.group({
        StudentsCount: '',
        classRoomNumber: '',
        subjects: this.fb.array([])
      });
    break;
      case 'subject':
        formItem = this.fb.group({
          subjectName: '',
          StudentsCount: '',
        })
    break;
}
return formItem
}
// get class room
getClassRooms() : FormArray {
return this.schoolform.get('classRooms') as FormArray
}
// add class room
addClassRooms()  {
  this.getClassRooms().push(this.createFormItem('classRoom'))
}
// add class room
deleteClassRooms(classRoomIndex: number)  {
  this.getClassRooms().removeAt(classRoomIndex)
}


// get class room subject
getClassRoomSubjects(classRoomIndex: number) : FormArray {
  return this.getClassRooms().at(classRoomIndex).get('subjects') as FormArray
  }

// add class room subject
addClassRoomSubjects(classRoomIndex: number) {
this.getClassRoomSubjects(classRoomIndex).push(this.createFormItem('subject'))
  }

  // delete class room subject
  deleteClassRoomSubjects(classRoomIndex: number, subjectindex: number) {
this.getClassRoomSubjects(classRoomIndex).removeAt(subjectindex)
    }





}
