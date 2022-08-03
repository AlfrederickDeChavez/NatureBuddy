import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Projects } from '../models/Projects.model';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Projects[] = [ 
    /*{
      title: 'Zero Garbage 2022',
      location: 'San Jose, Batangas',
      date: '2022-08-01',
      description: 'A waste management project to minimize the garbage in the San Jose, Batangas.',
    }
    */
  ];
  
  constructor(private socket: Socket) { }

  getProjects(){

    /*  //SOCKET IO CLIENT - NOT RECEIVING DATA FROM SERVER
    this.socket.on('receive-project', project => {
      this.projects.unshift(project)
    })
    
    return new Observable<Projects[]>(subscriber => {
      subscriber.next(this.projects)
    })
    */

    return this.projects
  }
  

  addProject(project) {
    this.projects.unshift(project)
    this.socket.emit('start-project', project)
  }
}
