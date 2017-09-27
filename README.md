### Current behavior

Cannot assert `hasClass` on wrapper node using `mount`.

### Reproduce steps

- `npm i`
- `npm test`

### Expected behavior

Snippet below should work

```javascript
class Foo extends React.Component {
  render() {
    return <h1 className="foo bar">Hello World</h1>
  }
}

test('Foo', () => {
  const wrapper = mount(<Foo />)
  expect(wrapper.hasClass('foo')).toBe(true)
})
```