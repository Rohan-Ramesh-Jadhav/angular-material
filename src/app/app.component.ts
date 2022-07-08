import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface TableData{
	possition: number,
	name: string,
	age: number,
	address: string,
	phno: number
}

const TABLE_DATA:TableData[]=[
	{possition:1,name:'Rohan',address:'Bangaluru',phno:8861681649,age:24},
	{possition:2,name:'Rahul',address:'Bangaluru',phno:7411193649,age:32},
	{possition:3,name:'Chetan',address:'Belagavi',phno:8879897654,age:28},
	{possition:4,name:'Manoj',address:'Mangaluru',phno:7411197654,age:21}
];

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-material';
	hidden:boolean = true;
	count:number = 0;
	form = new FormControl(

	);
	
	options:any[] = [1,2,3,4]
	
	constructor(private dialog:MatDialog){
		
	}

	toggleBage():void{
		this.count++;
		if(this.count==0)
		{
			this.hidden=true;
		}
		else
		{
			this.hidden = false;
		}
	}

	openDialog():void{
		const DilogRef = this.dialog.open(DialogExample,{
			width:'20vw'
		})
		setTimeout(()=>{DilogRef.close()},2000)
	}

	//table data
	TABLE_HEADER:string[]=['possition','name','address','phno','age'];
	dataSource:TableData[] = TABLE_DATA;
	
}

@Component({
	selector: 'dialog-example',
	templateUrl: 'dialog-example.html',
})

export class DialogExample{
	constructor(public dialogRef: MatDialogRef<DialogExample>){
	
	}

	onNoClick():void{
		this.dialogRef.close();
	}
}

