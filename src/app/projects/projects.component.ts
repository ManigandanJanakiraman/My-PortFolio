import { Component, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input('projects') projects!: Projects[];
  @ViewChildren('ProjectCard') ProjectCards!: QueryList<any>
  visitCard(index: number) {
    debugger
    console.log(this.ProjectCards, index)
    const allChildren = this.ProjectCards.toArray()
    if (allChildren) {
      allChildren.forEach((child, i) => {
        if (child.nativeElement.classList.contains('pr-active-card') && i != index) {
          this.removeVisit(child)
        }
      })
    }
    const childToChange = this.ProjectCards.toArray()[index]
    if (childToChange) {
      if (childToChange.nativeElement.classList.contains('pr-active-card')) {
        this.removeVisit(childToChange)
      }
      else {
        childToChange.nativeElement.classList.remove('pr-card-ds')
        childToChange.nativeElement.classList.remove('experience-truncate')
        childToChange.nativeElement.classList.add('pr-active-card')
        console.log(`Changed class of child ${index + 1}`)

        const pElements = childToChange.nativeElement.querySelectorAll('p');

        pElements.forEach((pElement: HTMLElement) => {
          if (pElement.classList.contains('experience-truncate')) {
            pElement.classList.remove('experience-truncate');
          }
        });
      }
    }
  }

  removeVisit(child: { nativeElement: { classList: { remove: (arg0: string) => void; add: (arg0: string) => void; }; querySelectorAll: (arg0: string) => any; }; }) {
    child.nativeElement.classList.remove('pr-active-card')
    child.nativeElement.classList.add('pr-card-ds')
    const pElements = child.nativeElement.querySelectorAll('p');

    pElements.forEach((pElement: HTMLElement) => {
      if (pElement.classList.contains('experience')) {
        pElement.classList.add('experience-truncate');
      }
    });
  }
}

