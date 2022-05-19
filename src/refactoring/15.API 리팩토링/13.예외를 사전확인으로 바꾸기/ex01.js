class ResourcePool {
  constructor(resource) {
    this.resource = resource;
    this.available;
    this.allocated;
  }

  get resource() {
    let result;

    if (available.isEmpty()) {
      result = this.resource.create();
      allocated.push(result);
    } else {
      result = available.pop();
      allocated.push(result);
    }

    return result;
  }
}