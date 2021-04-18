'use strict';

/*  //---상속---
// 부모클래스
let Person =function(){};
Person.prototype={
    eat:function(){console.log('우물우물');}
};

// 자식클래스
let BusinessPerson = function(){};
// 상속
BusinessPerson.prototype = new Person();
//오버로딩
BusinessPerson.prototype.work=function(){
    console.log('먹보');
}

// 클래스 인스턴스 생성 -> 자식클래스
let func = new BusinessPerson();
func.eat();
func.work();
//부모클래스
func=new Person();
func.eat();
func.work();  //error
*/

/*
//---private---
let Person = function(name,birth){
    let _name = name;
    let _birth = birth;

    this.getName = function(){
        return _name;
    }
    this.getBirth = function(){
        return _birth;
    }
}

Person.prototype.toString = function(){
    return 'Person : ' + this.getName() + ' ' + this.getBirth();
}

let p = new Person('종진',961206);
console.log( p.toString());

let str = p;
alert(str);
*/
/*
// 네임스페이스
var Info = Info || {};
Info.Person= function(name,birth){
    this.name=name;
    this.birth=birth;
};

Info.Person.prototype.toString=function(){
    return this.name + ' _ _ ' + this.birth;
}
let p = new Info.Person('김종진',new Date(1996,12,6));
console.log(p.toString());
*/
 










