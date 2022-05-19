class ResourcePool {
  constructor(resource) {
    this.resource = resource;
    this.available;
    this.allocated;
  }

  get resource() {
    let result = available.isEmpty() ? this.resource.create() : available.pop();
    allocated.push(result);

    return result;
  }
}