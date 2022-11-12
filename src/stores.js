import { writable } from "svelte/store";
import { v4 as uuidv4 } from 'uuid';

export const AppStore = writable({
  activeApp: "event-dispatcher", // 'event-dispatcher' | 'stores'
});

export const FeedbackStore = writable([
    {
        id: uuidv4(),
        content: 'this is the first review from the store',
        rating: 8
    },
    {
        id: uuidv4(),
        content: 'another great second review from the store that has no meaning :/',
        rating: 10
    },
]);

/**
 * store: an object that can be shared among different app's components
 * subscribe() method: allows interested parties to be notified whenever the store value changes
 * unsubscribed(): If the component was instantiated and destroyed many times, this would result in a memory leak. 
 *  - Calling a subscribe method returns an unsubscribe function.
 * $: can reference a store value by prefixing the store name with $
 * writable(): create a new store that values can be overwritten from outside
 * readable(): create a new store only for reference, values cannot be written from outside
 * derived: create a store whose value is based on the value of one or more other stores
 * Custom store: as long as an object correctly implements the subscribe method, it's a store
 * update(): update new value for the store based on the currentValue
 * set(): set and inform subscriber
 */