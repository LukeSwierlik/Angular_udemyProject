import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent implements OnInit {
    serverElements = [{
       type: 'server',
       name: 'TestServer',
       content: 'Just a test'
    }];

    onServerAdded(serverData: {serverName: string, serverContent: string}) {
        const { serverName, serverContent } = serverData;
        this.serverElements.push({
           type: 'server',
           name: serverName,
           content: serverContent
        });
    }

    onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
        const { serverName, serverContent } = blueprintData;
        this.serverElements.push({
            type: 'blueprint',
            name: serverName,
            content: serverContent
        });
    }

    onChangeFirst() {
        this.serverElements[0].name = 'Changed!';
    }

    onDestroyFirst() {
        this.serverElements.splice(0, 1);
    }


    ngOnInit(): void {
        console.log('dziala');
    }
}
