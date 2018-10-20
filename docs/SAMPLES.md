### Samples

1. A slide with only a title:

```
<ion-slide>
    <ion-card no-shadow>
        <h1>Hello, this is my awesome title 🚀</h1>
    </ion-card>
</ion-slide>
```

2. A slide with a list:

```
<ion-slide>
    <ion-card no-shadow>
        <h1>Here I display a list</h1>

        <ion-list lines="none" padding-top>
            <ion-item>
                <ion-label text-wrap><strong>Point 1</strong>: something really cool</ion-label>
                <ion-checkbox slot="start" checked></ion-checkbox>
            </ion-item>

            <ion-item>
                <ion-label text-wrap>or something <strong>awesome</strong></ion-label>
                <ion-checkbox slot="start" checked></ion-checkbox>
            </ion-item>
        </ion-list>
    </ion-card>
</ion-slide>
```

3. A slide with two columns:

```
<ion-slide>
    <ion-card no-shadow>
        <h1>Two columns</h1>

        <ion-grid padding-top>
            <ion-row align-items-center justify-content-center>
                <ion-col size="6">
                    This is the column left 
                </ion-col>
                
                <ion-col size="6">
                    This is the column right 
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-card>
</ion-slide>
```
            
4. A slide where you display code:
            
```
<ion-slide>
        <ion-card no-shadow>
            <h1>Here we display code</h1>

            <code padding margin text-left>&lt;ion-button&gt;
    &lt;ion-label&gt;Hello world&lt;/ion-label&gt;
    &lt;ion-icon name="happy" slot="start"&gt;&lt;/ion-icon&gt;
&lt;/ion-button&gt;</code>
        </ion-card>
    </ion-slide>
```
