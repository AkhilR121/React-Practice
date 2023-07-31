1. Why do we need to provide key props to the list items?

   > To provide a unique identity to help react to identify which element is changed(removed, added or updated, etc.).
   > Example:- <li key={id}></li>

2. What is the difference between controlled and uncontrolled components?

   > Controlled Components:- Those components are handled by the react state. Also, these components are predictable. UnControlled Components:- Where as the uncontrolled components are controlled by their internal DOM elements. When the user interacts with the DOM by the event handlers then only get access for this components.

3. How can we send data from child component to parent component?

   > We can make a call to child component in the parent component then by using the props we can send the data from parent to child.

   Example:-

   ```ts
   function ParentComponent(){
      const data = ...
      <Child data={data}/>
   }

   function ChildComponent({data}){
      console.log(data)
   }
   ```

4. What's the problem with the following code?

   ```ts
   export const FooBar = (props: any) => {
     const foo = () => {
       props.x += 1;
     };
     React.useEffect(() => {
       if (props.y) {
         foo();
       }
     }, [foo, props.y]);

     return <Button onCLick={foo}>Click me</Button>;
   };
   ```

   Explanation:-

   > Including foo function in the dependencies array it leads to unnecessary re-renders. No need to include foo.
   > props.x += 1 is get modified directly which leads to mutation which is not a good practice in the react.

5. With form and submit button, what does browser do by default when we click on submit button?

   > When we click on the submit button on the form it it automatically submits the data to the server. To prevent this actions by submit button we have use the event.preventDefault() methods on the event handler function.

6. Write a signup form component in react, with username, password, conformPassword and rememberMe fields. Validate using zod. Assume you need to post form to APO at /api/authenticate.

   ```tsx
   import axios from "axios";
   import { z } from "zod";

   const formSchema = z
     .object({
       username: z.string().min(3, "Username is required").max(18),
       password: z
         .string()
         .min(8, "Password is required")
         .min(12, "Password must have more than 8 characters"),
       confirmPassword: z.string().min(8, "Password confirmation is required"),
       remember: z.boolean().optional(),
     })
     .refine(data => data.password === data.confirmPassword, {
       path: ["confirmPassword"],
       message: "Passwords do not match",
     });

   export function Exam() {
     function onSubmit(e: any) {
       e.preventDefault();
       const formData = new FormData(e.target);
       const data = Object.fromEntries(formData);
       try {
         const validatedForm = formSchema.parse(data);
         axios
           .post("api/authenticate", { data })
           .then((response: any) => response.json());
       } catch (err) {
         return err;
       }
     }

     return (
       <form onSubmit={onSubmit} method="POST">
         <div>
           <label htmlFor="name">UserName: </label>
           <input
             className="border-2 border-black p-3"
             type="text"
             required
             name="name"
             id="name"
           />
         </div>

         <div>
           <label htmlFor="password">Password: </label>
           <input
             className="border-2 border-black p-3"
             type="password"
             name="password"
             required
             id="password"
           />
         </div>

         <div>
           <label htmlFor="confirmPassword">confirmPassword: </label>
           <input
             className="border-2 border-black p-3"
             type="password"
             required
             name="confirmPassword"
             id="confirmPassword"
           />
         </div>
         <div>
           <input
             className="border-2 border-black p-3"
             type="checkbox"
             id="remember"
             name="remember"
           />
           <label htmlFor="remember">Remember me</label>
         </div>
         <button type="submit" className="border-2 border-black p-3">
           Submit
         </button>
       </form>
     );
   }
   ```

7. Implement a simple context called StateContext to share some state and a hook call useSharedState to access that state.

8. What is the difference between useMemo and useCallback?

   > useMemo():- useMemo hook will returns the memoized values.
   > useCallback():- useCallback hook returns the memoized callback function.

9. Do we use React.useRef only for access DOM elements? Write a simple component with input fields. Use useRet to focus one of those elements.

   > useRef() can be used main for DOM elements because it will not depends on react component.

   ```tsx
   import { useRef } from "react";

   export function Exam() {
     const ref = useRef(null);

     function handleClick() {
       ref.current.focus();
     }
     return (
       <>
         <input className="border-2 border-black" type="text" ref={ref} />
         <button onClick={handleClick}>Focus</button>
       </>
     );
   }
   ```

10. Mention 10 problems with following code.

Routing:-

1. Name the different parts of the URL and explain their purpose

   > https://www.google.com:80 -> 80 is the PORT number
   > /foo -> parent route of above url
   > /bar -> child rout of /foo
   > /search?q=car+pictures => route parameters(params)

2. State two reasons for using routing?

   > -> We can navigate from one component to another by specifying path.
   > -> It creates a hierarchal structures between the components.

3. How can we navigate to a different route programmatically?

   > By specifying the path="/"(url) for each components.

4. Explain where we could use index route?

   > By indicating the index to the component, that component will render when no other path matches. In simple, By default when we open a website without child routes the index route will render on the view.

5. In a nested route, each route can have a loader. Does react-router use one or all loaders to load data? Explain.

   > In react nested router can use all loader instead to load data. Because in react router each route in a nested structure can have its own loader, which is typically used to fetch data required for rendering the components.

6. When is action function called in react-router?

   > Action functions are called whenever the app sends a non get submission like "get", "post", "put", "patch", "delete", "update" to the route.

7. Explain the advantages of nested routing.
   > Share a different routes in a single page by giving the click events.
   > Rewrite components of a page rather than loading entire new webpages.
   > Very easy to implement.
   > Nom more extra dependencies.
   > Reusability.

Data Fetching:-

1. In modern react do we need to use isLoading and error values returned form useQuery. For example in the following code. If not, mention the alternatives. If yes, write pseudo code using these values.

2. Write pseudo code for optimistic updates. It doesn't need to be complete code.

3. What's the best approach for transforming data received from server in react-query. For example, I want to lowercase all the names of the users returned from the server.

   > The best approach for transforming a data from server in react-query is to use "transformResponse" property, which is used to convert the data to lowercase or uppercase.

4. When we perform any mutations, we might need to fetch data again from the server. Does react-query provide any way to do this?

5. If mutation fails, does react-query retry them?

   > By default react-query will not automatically retry login if mutation fails. By adding the custom error handling property "onError" on useMutation then the react-query can retry the logic if the mutation fails. Here "useMutation()" hook will allows us to perform custom error handling.

6. Implement two components, ShoppingCartView adn ShoppingCartCount. You will fetch shopping cart data from the server. Just render the list, don't worry about supporting any operation. ShoppingCartCount will show the number of items in the Shopping cart. Remember that, these components don't have any parent component except the root component.

> ShoppingCartView
> App Component

```tsx
function App() {
  return <ShoppingCartApp />;
}

function ShoppingCartApp() {
  function dataFetch() {
    const response = await fetch("/api/data");
    return response.json();
  }

  const [products] = useState(() => dataFetch());
  const [cartState, dispatch] = useImmerReducer<State, Action>(reducer, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <ShoppingItems items={products} dispatch={dispatch} />
        <CartItems products={products} state={cartState} dispatch={dispatch} />
      </div>
    </div>
  );
}

function ShoppingItems() {
  return (
    <div className="">
      {items.map(item => {
        return (
          <div className="" key={item.id}>
            <div className="">
              <div className="">{item.rating}</div>
              <img src={item.image} className="" alt="Shopping Items" />
            </div>
            <div className="">
              <p className="">{item.item_name}</p>
              <p className="">{item.description}</p>
              <div className="py-3 text-sm font-bold">
                <sup className="text-xs">&#8377;</sup>
                <span className="text-lg">{item.price} </span>
              </div>
            </div>
            <div>
              <button
                onClick={e => {
                  e.preventDefault();
                  handleAddToCart(item);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CartItems({
  products,
  dispatch,
  state,
}: {
  products: Product[];
  dispatch: React.Dispatch<Action>;
  state: State;
}) {
  return (
    <div className="">
      <div className="Total">
        Subtotal ({state.reduce((a, s) => a + s.quantity, 0)} Items){" "}
        <sup className="">&#8377;</sup>
        <span className="Quantity">
          {state
            .map(ci => {
              const product = products.find(p => p.id === ci.id) as Product;
              return product.price * ci.quantity;
            })
            .reduce((a, b) => a + b, 0)}
        </span>
        <sup className="text-sm">00</sup>
      </div>
      {state.map(item => (
        <CartItem
          product={products.find(p => p.id === item.id) as Product}
          quantity={item.quantity}
          dispatch={dispatch}
        />
      ))}
      <button className="">Proceed to Buy</button>
    </div>
  );
}

function CartItem({
  product,
  quantity,
  dispatch,
}: {
  product: Product;
  quantity: number;
  dispatch: React.Dispatch<Action>;
}) {
  const { id, image, item_name, price } = product;
  function handleDecQuantity() {
    dispatch({ type: "dec_item", id });
  }
  function handleIncQuantity() {
    dispatch({ type: "inc_item", id });
  }
  return (
    <div key={id} className="">
      <img src={image} className="" alt="Image" />
      <p className="">
        {item_name} <br />
        <span className="">Eligible for FREE Shipping</span>
      </p>
      <Quantity
        quantity={quantity}
        onInc={handleIncQuantity}
        onDec={handleDecQuantity}
      />

      <p className="">
        <sup className="">&#8377;</sup>
        {price * quantity}
        <sup className="">00</sup>
      </p>
    </div>
  );
}
```
