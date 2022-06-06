const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Blog", function () {
  it("Should create a post", async function () {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("My blog");
    await blog.deployed();
    await blog.createPost("My first Post", "12345");
    const posts = await blog.fetchPosts();
    expect(posts[0].title).to.equal("My first Post");
  });

  it("Should eit a post", async function () {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("My blog");
    await blog.deployed();
    await blog.createPost("My first Post", "12345");

    await blog.updatePost(1, "My updated Post", "23456", true);
    const posts = await blog.fetchPosts();
    expect(posts[0].title).to.equal("My updated Post");
  });

  it("Should update the name", async function () {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("My blog");
    await blog.deployed();

    expect(await blog.name()).to.equal("My blog");
    await blog.updateName("My new blog");
    expect(await blog.name()).to.equal("My new blog");
  });
});
