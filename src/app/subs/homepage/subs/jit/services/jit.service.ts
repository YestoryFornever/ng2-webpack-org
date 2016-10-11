import { Injectable } from '@angular/core';
import { Jits }     from './../mock-jits';
import { LoggerService } from './logger.service';
@Injectable()
export class JitService {
	constructor(private logger:LoggerService){}
	getJits() {
		this.logger.log("获取数据...");
		return Jits;
	}
}
