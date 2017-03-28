import {Component, Input} from 'angular2/core'

@Component({
    selector: 'like',
    template:`
        <i  class="glyphicon glyphicon-heart" 
            [class.highlighted]="iLike"  
            (click)="onClick()">
        </i>
        <span>{{ rating }}</span>
    `,
    styles:[`
        .glyphicon-heart{
            font-size: 2em;
            cursor: pointer;
            color: #ccc;
        }
        .highlighted{
            color: deeppink;
            font-size: 2em;
        }
        
    `]
})

export /**
 * HeartComponent
 */
class LikeComponent {

    @Input() iLike = false;
    @Input() rating;

    onClick(){
        this.iLike = !this.iLike;  
        this.rating += this.iLike ? 1 : -1;
    }
}