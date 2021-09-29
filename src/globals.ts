export default function() {
    const myThing: {foo: number, baz: string} = {
        foo: 23,
        baz: 'idk'
    }

    myThing.foo= foo;
    console.log(JSON.stringify(myThing));
}

const foo=999;