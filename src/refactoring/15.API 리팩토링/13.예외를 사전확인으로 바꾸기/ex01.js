class ResourcePool {
  constructor(resource) {
    this.resource = resource;
    this.available;
    this.allocated;
  }

  get resource() {
    let result;

    try {
      result = available.pop();
      allocated.push(result);
    } catch (e) {
      result = this.resource.create();
      allocated.push(result);
    }
  }
}